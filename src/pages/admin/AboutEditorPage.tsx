import { useEffect, useState } from "react";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Save, Plus, X } from "lucide-react";
import type { AboutContent } from "@/types";

const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20";

const emptyAbout: AboutContent = { name: "", title: "", bio: "", avatarUrl: "", email: "", phone: "", linkedin: "", github: "", strengths: [] };

export default function AboutEditorPage() {
  const [about, setAbout] = useState<AboutContent>(emptyAbout);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [ns, setNs] = useState({ icon: "", title: "", desc: "" });

  useEffect(() => {
    adminApi.get<AboutContent>("/api/admin/about")
      .then((data) => {
        let strengths = data.strengths || [];
        if (typeof strengths === "string") {
          try { strengths = JSON.parse(strengths); } catch { strengths = []; }
        }
        setAbout({ ...emptyAbout, ...data, strengths });
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  const save = async () => {
    setSaving(true); setError(""); setSuccess(false);
    try { await adminApi.put("/api/admin/about", about); setSuccess(true); setTimeout(() => setSuccess(false), 3000); }
    catch (err) { setError(err instanceof Error ? err.message : "Save failed"); }
    finally { setSaving(false); }
  };

  const addStrength = () => {
    if (ns.icon && ns.title && ns.desc) {
      setAbout({ ...about, strengths: [...about.strengths, { ...ns }] });
      setNs({ icon: "", title: "", desc: "" });
    }
  };

  if (loading) return (
    <div className="space-y-4"><Skeleton className="h-8 w-48" /><Card><CardContent className="space-y-4 p-6">{Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}</CardContent></Card></div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-foreground">About Editor</h2><p className="text-sm text-muted-foreground">Edit about section content</p></div>
        <Button onClick={save} disabled={saving}><Save className="size-4" />{saving ? "Saving..." : "Save Changes"}</Button>
      </div>
      {error && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}
      {success && <div className="rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-500">Saved successfully</div>}
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["name", "Name", about.name, (v: string) => setAbout({...about, name: v})],
              ["title", "Title", about.title, (v: string) => setAbout({...about, title: v})],
              ["avatarUrl", "Avatar URL", about.avatarUrl||"", (v: string) => setAbout({...about, avatarUrl: v})],
              ["email", "Email", about.email||"", (v: string) => setAbout({...about, email: v})],
              ["phone", "Phone", about.phone||"", (v: string) => setAbout({...about, phone: v})],
              ["linkedin", "LinkedIn", about.linkedin||"", (v: string) => setAbout({...about, linkedin: v})],
              ["github", "GitHub", about.github||"", (v: string) => setAbout({...about, github: v})],
            ].map(([key, label, value, onChange]) => (
              <div key={key as string} className="space-y-2">
                <label className="text-sm font-medium text-foreground">{label as string}</label>
                <input value={value as string} onChange={(e) => (onChange as (v:string)=>void)(e.target.value)} className={inputClass} />
              </div>
            ))}
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-foreground">Bio</label>
              <textarea rows={4} value={about.bio} onChange={(e) => setAbout({...about, bio: e.target.value})} className={inputClass} />
            </div>
          </div>

          <div className="space-y-4 border-t border-border pt-4">
            <label className="text-sm font-medium text-foreground">Strengths</label>
            {about.strengths.length > 0 && (
              <div className="space-y-2">
                {about.strengths.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-md border border-border bg-muted/30 p-3">
                    <span className="text-lg">{s.icon}</span>
                    <div className="flex-1"><p className="text-sm font-medium text-foreground">{s.title}</p><p className="text-xs text-muted-foreground">{s.desc}</p></div>
                    <button onClick={() => setAbout({...about, strengths: about.strengths.filter((_,j) => j !== i)})} className="text-muted-foreground hover:text-destructive"><X className="size-4" /></button>
                  </div>
                ))}
              </div>
            )}
            <div className="rounded-md border border-border p-4">
              <p className="mb-3 text-sm font-medium text-muted-foreground">Add Strength</p>
              <div className="grid gap-3 sm:grid-cols-3">
                <input value={ns.icon} onChange={(e) => setNs({...ns, icon: e.target.value})} placeholder="Icon (emoji)" className={inputClass} />
                <input value={ns.title} onChange={(e) => setNs({...ns, title: e.target.value})} placeholder="Title" className={inputClass} />
                <input value={ns.desc} onChange={(e) => setNs({...ns, desc: e.target.value})} placeholder="Description" className={inputClass} />
              </div>
              <Button variant="outline" size="sm" className="mt-3" onClick={addStrength}><Plus className="size-4" />Add Strength</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
