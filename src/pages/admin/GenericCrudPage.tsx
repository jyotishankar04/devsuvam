import { useEffect, useState, useCallback } from "react";
import { adminApi } from "@/lib/adminApi";
import DataTable from "@/components/admin/DataTable";
import type { Column } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, AlertTriangle } from "lucide-react";

const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20";

interface FormField {
  key: string; label: string; type: "text" | "textarea" | "number" | "checkbox" | "select";
  options?: { label: string; value: string }[];
}

interface CrudPageProps {
  title: string; endpoint: string; columns: Column<Record<string, unknown>>[]; formFields: FormField[];
}

export default function GenericCrudPage({ title, endpoint, columns, formFields }: CrudPageProps) {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Record<string, unknown> | null>(null);
  const [deleting, setDeleting] = useState(false);

  const showToast = (message: string, type: "success" | "error") => { setToast({ message, type }); setTimeout(() => setToast(null), 3000); };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminApi.get<{ items: Record<string, unknown>[] } | Record<string, unknown>[]>(endpoint);
      setData(Array.isArray(res) ? res : res.items || []);
      setError("");
    } catch (err) { setError(err instanceof Error ? err.message : "Failed to load"); }
    finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const openCreate = () => {
    const initial: Record<string, unknown> = {};
    formFields.forEach((f) => { initial[f.key] = f.type === "checkbox" ? false : f.type === "number" ? 0 : ""; });
    setEditing(initial); setFormError(""); setDialogOpen(true);
  };

  const openEdit = (item: Record<string, unknown>) => { setEditing({ ...item }); setFormError(""); setDialogOpen(true); };

  const handleSave = async () => {
    setFormError(""); setSaving(true);
    try {
      if (editing.id) await adminApi.put(`${endpoint}/${editing.id}`, editing);
      else await adminApi.post(endpoint, editing);
      setDialogOpen(false);
      showToast(editing.id ? "Updated successfully" : "Created successfully", "success");
      fetchData();
    } catch (err) { setFormError(err instanceof Error ? err.message : "Save failed"); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await adminApi.delete(`${endpoint}/${deleteTarget.id}`);
      setDeleteTarget(null); showToast("Deleted successfully", "success"); fetchData();
    } catch (err) { showToast(err instanceof Error ? err.message : "Delete failed", "error"); }
    finally { setDeleting(false); }
  };

  if (error && !loading) return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-destructive">{error}</p>
      <Button variant="outline" className="mt-4" onClick={fetchData}>Retry</Button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-foreground">{title}</h2><p className="text-sm text-muted-foreground">Manage your {title.toLowerCase()}</p></div>
        <Button onClick={openCreate}><Plus className="size-4" />Add New</Button>
      </div>

      <DataTable data={data} columns={columns} loading={loading} onEdit={openEdit} onDelete={(item) => setDeleteTarget(item)}
        emptyMessage={`No ${title.toLowerCase()} found. Create one to get started.`} />

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader><DialogTitle>{editing.id ? "Edit" : "Create"} {title}</DialogTitle><DialogDescription>{editing.id ? "Update the" : "Add a new"} {title.toLowerCase()} entry.</DialogDescription></DialogHeader>
          <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
            {formError && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{formError}</div>}
            {formFields.map((f) => (
              <div key={f.key} className="space-y-2">
                <label className="text-sm font-medium text-foreground">{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea rows={3} value={(editing[f.key] as string) || ""} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })} className={inputClass} />
                ) : f.type === "checkbox" ? (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={!!editing[f.key]} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.checked })} className="size-4 rounded border-border" />
                    <span className="text-sm text-foreground">{f.label}</span>
                  </label>
                ) : f.type === "select" && f.options ? (
                  <select value={(editing[f.key] as string) || ""} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })} className={inputClass}>
                    <option value="">Select...</option>
                    {f.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                ) : (
                  <input type={f.type} value={(editing[f.key] as string | number) ?? ""} onChange={(e) => setEditing({ ...editing, [f.key]: f.type === "number" ? +e.target.value : e.target.value })} className={inputClass} />
                )}
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editing.id ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader><DialogTitle className="flex items-center gap-2"><AlertTriangle className="size-5 text-destructive" />Confirm Delete</DialogTitle></DialogHeader>
          <p className="text-muted-foreground">Are you sure you want to delete this item? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmDelete} disabled={deleting}>{deleting ? "Deleting..." : "Delete"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {toast && (
        <div className={`fixed bottom-6 right-6 rounded-lg px-4 py-3 text-sm font-medium shadow-lg z-50 ${toast.type === "success" ? "bg-emerald-500 text-white" : "bg-destructive text-white"}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
