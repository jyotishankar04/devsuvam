import { useEffect, useState } from "react";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Pencil, Trash2, Save, X, AlertTriangle } from "lucide-react";

interface Setting {
  id?: string;
  key: string;
  value: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Setting>({ key: "", value: "" });
  const [formError, setFormError] = useState("");

  const [inlineEdits, setInlineEdits] = useState<Record<string, string>>({});
  const [editingKey, setEditingKey] = useState<string | null>(null);

  const [deleteTarget, setDeleteTarget] = useState<Setting | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await adminApi.get<{ settings: Setting[] } | Setting[]>("/api/admin/settings");
      const items = Array.isArray(res) ? res : res.settings || [];
      setSettings(items);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSaveAll = async () => {
    setSaving(true);
    setSuccess("");
    try {
      await adminApi.post("/api/admin/settings", { settings });
      setSuccess("Settings saved successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const openCreate = () => {
    setEditing({ key: "", value: "" });
    setFormError("");
    setDialogOpen(true);
  };

  const handleAddOrUpdate = async () => {
    if (!editing.key.trim()) {
      setFormError("Key is required");
      return;
    }
    setFormError("");
    setSaving(true);
    try {
      const existing = settings.find((s) => s.key === editing.key);
      if (existing && !editing.id) {
        const updated = settings.map((s) =>
          s.key === editing.key ? { ...s, value: editing.value } : s
        );
        setSettings(updated);
      } else if (editing.id) {
        setSettings(settings.map((s) => (s.id === editing.id ? editing : s)));
      } else {
        setSettings([...settings, { ...editing, id: Date.now().toString() }]);
      }
      setDialogOpen(false);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      setSettings(settings.filter((s) => s.key !== deleteTarget.key));
      setDeleteTarget(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  const startInlineEdit = (setting: Setting) => {
    setEditingKey(setting.key);
    setInlineEdits({ ...inlineEdits, [setting.key]: setting.value });
  };

  const saveInlineEdit = (setting: Setting) => {
    const newValue = inlineEdits[setting.key] ?? setting.value;
    setSettings(settings.map((s) => (s.key === setting.key ? { ...s, value: newValue } : s)));
    setEditingKey(null);
  };

  const cancelInlineEdit = () => {
    setEditingKey(null);
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Card>
          <CardContent className="space-y-3 p-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Site Settings</h2>
          <p className="text-sm text-muted-foreground">{settings.length} settings</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={openCreate}>
            <Plus className="size-4" />
            Add Setting
          </Button>
          <Button onClick={handleSaveAll} disabled={saving} variant="outline">
            <Save className="size-4" />
            {saving ? "Saving..." : "Save All"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>
      )}
      {success && (
        <div className="rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-500">{success}</div>
      )}

      <Card>
        <CardContent className="p-0">
          {settings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-muted-foreground">No settings yet</p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Key</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Value</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {settings.map((setting) => (
                  <tr key={setting.key} className="border-b border-border last:border-b-0 hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <code className="rounded bg-muted/50 px-2 py-0.5 text-xs font-mono">
                        {setting.key}
                      </code>
                    </td>
                    <td className="px-4 py-3">
                      {editingKey === setting.key ? (
                        <div className="flex items-center gap-2">
                          <input
                            value={inlineEdits[setting.key] ?? setting.value}
                            onChange={(e) =>
                              setInlineEdits({ ...inlineEdits, [setting.key]: e.target.value })
                            }
                            className="flex-1 rounded-md border border-input bg-background px-3 py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === "Enter") saveInlineEdit(setting);
                              if (e.key === "Escape") cancelInlineEdit();
                            }}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            onClick={() => saveInlineEdit(setting)}
                          >
                            <Save className="size-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            onClick={cancelInlineEdit}
                          >
                            <X className="size-3.5" />
                          </Button>
                        </div>
                      ) : (
                        <span className="max-w-sm truncate block text-foreground/80">
                          {setting.value || <span className="text-muted-foreground/60 italic">Empty</span>}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => startInlineEdit(setting)}
                          title="Edit"
                        >
                          <Pencil className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeleteTarget(setting)}
                          title="Delete"
                          className="text-destructive hover:text-destructive/80"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Setting</DialogTitle>
            <DialogDescription>Add a new key-value setting</DialogDescription>
          </DialogHeader>

          {formError && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{formError}</div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Key</label>
              <input
                value={editing.key}
                onChange={(e) => setEditing({ ...editing, key: e.target.value })}
                placeholder="e.g. site_title"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Value</label>
              <textarea
                rows={3}
                value={editing.value}
                onChange={(e) => setEditing({ ...editing, value: e.target.value })}
                placeholder="Setting value"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddOrUpdate} disabled={saving}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="size-5 text-destructive" />
              Confirm Delete
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the setting "{deleteTarget?.key}"?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
