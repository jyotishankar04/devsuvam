import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router";
import { adminApi } from "@/lib/adminApi";
import DataTable from "@/components/admin/DataTable";
import type { Column } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Loader from "@/components/custom/Loader";
import { Plus, AlertTriangle } from "lucide-react";
import type { Project, PaginatedResponse } from "@/types";

const emptyProject: Project = {
  id: "",
  slug: "",
  title: "",
  description: "",
  tags: [],
  image: "",
  liveUrl: "",
  githubUrl: "",
  featured: false,
  content: "",
  videoUrl: "",
  category: "",
  gallery: [],
  status: "draft",
  sortOrder: 0,
};

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<PaginatedResponse<Project> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Project>(emptyProject);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);
  const [deleting, setDeleting] = useState(false);

  const [tagsInput, setTagsInput] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminApi.get<PaginatedResponse<Project>>(
        `/api/admin/projects?page=${page}&limit=20`
      );
      setData(res);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (searchParams.get("new") === "true") {
      setEditing(emptyProject);
      setTagsInput("");
      setDialogOpen(true);
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  const openCreate = () => {
    setEditing(emptyProject);
    setTagsInput("");
    setFormError("");
    setDialogOpen(true);
  };

  const openEdit = (project: Project) => {
    setEditing({ ...project, tags: [...(project.tags || [])] });
    setTagsInput("");
    setFormError("");
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setFormError("");
    setSaving(true);
    try {
      const payload = {
        ...editing,
        tags: editing.tags || [],
        gallery: editing.gallery || [],
      };
      if (editing.id) {
        await adminApi.put(`/api/admin/projects/${editing.id}`, payload);
      } else {
        await adminApi.post("/api/admin/projects", payload);
      }
      setDialogOpen(false);
      fetchData();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await adminApi.delete(`/api/admin/projects/${deleteTarget.id}`);
      setDeleteTarget(null);
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  const addTag = (tag: string) => {
    if (tag && !editing.tags?.includes(tag)) {
      setEditing({ ...editing, tags: [...(editing.tags || []), tag] });
    }
    setTagsInput("");
  };

  const columns: Column<Project>[] = [
    { key: "title", label: "Title" },
    {
      key: "status",
      label: "Status",
      render: (item) => (
        <Badge
          variant="secondary"
          className={
            item.status === "published"
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-yellow-500/10 text-yellow-500"
          }
        >
          {item.status || "draft"}
        </Badge>
      ),
    },
    {
      key: "featured",
      label: "Featured",
      render: (item) =>
        item.featured ? (
          <Badge className="bg-orange-100 text-orange-700">Featured</Badge>
        ) : (
          <span className="text-muted-foreground/60">—</span>
        ),
    },
    {
      key: "tags",
      label: "Tags",
      render: (item) => (
        <div className="flex flex-wrap gap-1">
          {(item.tags || []).slice(0, 3).map((t) => (
            <Badge key={t} variant="outline" className="text-xs">
              {t}
            </Badge>
          ))}
          {(item.tags || []).length > 3 && (
            <span className="text-xs text-muted-foreground/60">+{item.tags!.length - 3}</span>
          )}
        </div>
      ),
    },
  ];

  if (error && !data) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-destructive">{error}</p>
        <Button variant="outline" className="mt-4" onClick={fetchData}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <p className="text-sm text-muted-foreground">
            {data ? `${data.total} total` : "Loading..."}
          </p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="size-4" />
          New Project
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <DataTable
            data={data?.items || []}
            columns={columns}
            onEdit={openEdit}
            onDelete={setDeleteTarget}
            loading={loading}
            emptyMessage="No projects yet"
          />
        </CardContent>
      </Card>

      {data && data.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {data.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= data.totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing.id ? "Edit Project" : "New Project"}</DialogTitle>
            <DialogDescription>
              {editing.id ? "Update project details" : "Create a new project"}
            </DialogDescription>
          </DialogHeader>

          {formError && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{formError}</div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-foreground">Title</label>
              <input
                value={editing.title}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Slug</label>
              <input
                value={editing.slug}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Status</label>
              <select
                value={editing.status || "draft"}
                onChange={(e) => setEditing({ ...editing, status: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-foreground">Description</label>
              <textarea
                rows={3}
                value={editing.description}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-foreground">Content</label>
              <textarea
                rows={5}
                value={editing.content || ""}
                onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Image URL</label>
              <input
                value={editing.image}
                onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Video URL</label>
              <input
                value={editing.videoUrl || ""}
                onChange={(e) => setEditing({ ...editing, videoUrl: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Live URL</label>
              <input
                value={editing.liveUrl || ""}
                onChange={(e) => setEditing({ ...editing, liveUrl: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">GitHub URL</label>
              <input
                value={editing.githubUrl || ""}
                onChange={(e) => setEditing({ ...editing, githubUrl: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Category</label>
              <input
                value={editing.category || ""}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Sort Order</label>
              <input
                type="number"
                value={editing.sortOrder ?? 0}
                onChange={(e) => setEditing({ ...editing, sortOrder: Number(e.target.value) })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <input
                type="checkbox"
                checked={editing.featured || false}
                onChange={(e) => setEditing({ ...editing, featured: e.target.checked })}
                className="size-4"
              />
              <label className="text-sm font-medium text-foreground">Featured</label>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-foreground">Tags</label>
              <div className="flex flex-wrap gap-1 mb-2">
                {(editing.tags || []).map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    {tag}
                    <button
                      onClick={() =>
                        setEditing({
                          ...editing,
                          tags: (editing.tags || []).filter((t) => t !== tag),
                        })
                      }
                      className="ml-1 text-muted-foreground hover:text-foreground/80"
                    >
                      x
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTag(tagsInput.trim());
                    }
                  }}
                  placeholder="Type and press Enter"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addTag(tagsInput.trim())}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : editing.id ? "Update" : "Create"}
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
              Are you sure you want to delete "{deleteTarget?.title}"? This action cannot be undone.
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
