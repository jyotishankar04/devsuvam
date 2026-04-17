import { useEffect, useState } from "react";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Save, Plus, X } from "lucide-react";
import type { HeroContent } from "@/types";

const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring/20";

const emptyHero: HeroContent = {
  name: "", title: "", subtitle: "", description: "", resumeUrl: "",
  images: [], techBadges: [], ctaPrimary: "", ctaPrimaryUrl: "", ctaSecondary: "", ctaSecondaryUrl: "",
};

export default function HeroEditorPage() {
  const [hero, setHero] = useState<HeroContent>(emptyHero);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newBadge, setNewBadge] = useState("");

  useEffect(() => {
    adminApi.get<HeroContent>("/api/admin/hero")
      .then((data) => setHero({ ...emptyHero, ...data, images: data.images || [], techBadges: data.techBadges || [] }))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true); setError(""); setSuccess(false);
    try { await adminApi.put("/api/admin/hero", hero); setSuccess(true); setTimeout(() => setSuccess(false), 3000); }
    catch (err) { setError(err instanceof Error ? err.message : "Save failed"); }
    finally { setSaving(false); }
  };

  const addImage = () => {
    if (newImageUrl.trim() && !hero.images.includes(newImageUrl.trim())) {
      setHero({ ...hero, images: [...hero.images, newImageUrl.trim()] }); setNewImageUrl("");
    }
  };
  const addBadge = () => {
    if (newBadge.trim() && !hero.techBadges.includes(newBadge.trim())) {
      setHero({ ...hero, techBadges: [...hero.techBadges, newBadge.trim()] }); setNewBadge("");
    }
  };

  if (loading) return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <Card><CardContent className="space-y-4 p-6">{Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}</CardContent></Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Hero Editor</h2>
          <p className="text-sm text-muted-foreground">Edit hero section content</p>
        </div>
        <Button onClick={handleSave} disabled={saving}><Save className="size-4" />{saving ? "Saving..." : "Save Changes"}</Button>
      </div>
      {error && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}
      {success && <div className="rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-500">Saved successfully</div>}
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["name", "Name", hero.name, (v: string) => setHero({...hero, name: v})],
              ["title", "Title", hero.title, (v: string) => setHero({...hero, title: v})],
            ].map(([key, label, value, onChange]) => (
              <div key={key as string} className="space-y-2">
                <label className="text-sm font-medium text-foreground">{label as string}</label>
                <input value={value as string} onChange={(e) => (onChange as (v:string)=>void)(e.target.value)} className={inputClass} />
              </div>
            ))}
            <div className="space-y-2 sm:col-span-2"><label className="text-sm font-medium text-foreground">Subtitle</label><input value={hero.subtitle || ""} onChange={(e) => setHero({...hero, subtitle: e.target.value})} className={inputClass} /></div>
            <div className="space-y-2 sm:col-span-2"><label className="text-sm font-medium text-foreground">Description</label><textarea rows={3} value={hero.description} onChange={(e) => setHero({...hero, description: e.target.value})} className={inputClass} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-foreground">Resume URL</label><input value={hero.resumeUrl || ""} onChange={(e) => setHero({...hero, resumeUrl: e.target.value})} className={inputClass} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-foreground">CTA Primary</label><input value={hero.ctaPrimary} onChange={(e) => setHero({...hero, ctaPrimary: e.target.value})} className={inputClass} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-foreground">CTA Primary URL</label><input value={hero.ctaPrimaryUrl} onChange={(e) => setHero({...hero, ctaPrimaryUrl: e.target.value})} className={inputClass} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-foreground">CTA Secondary</label><input value={hero.ctaSecondary} onChange={(e) => setHero({...hero, ctaSecondary: e.target.value})} className={inputClass} /></div>
            <div className="space-y-2"><label className="text-sm font-medium text-foreground">CTA Secondary URL</label><input value={hero.ctaSecondaryUrl} onChange={(e) => setHero({...hero, ctaSecondaryUrl: e.target.value})} className={inputClass} /></div>
          </div>
          <div className="space-y-3 border-t border-border pt-4">
            <label className="text-sm font-medium text-foreground">Images</label>
            <div className="flex flex-wrap gap-2">
              {hero.images.map((url, i) => (
                <Badge key={i} variant="secondary" className="gap-1 px-3 py-2">
                  <span className="max-w-[200px] truncate text-xs">{url}</span>
                  <button onClick={() => setHero({...hero, images: hero.images.filter((img) => img !== url)})} className="ml-1 text-muted-foreground hover:text-destructive"><X className="size-3" /></button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addImage(); } }} placeholder="Image URL" className={`${inputClass} flex-1`} />
              <Button variant="outline" size="sm" onClick={addImage}><Plus className="size-4" />Add</Button>
            </div>
          </div>
          <div className="space-y-3 border-t border-border pt-4">
            <label className="text-sm font-medium text-foreground">Tech Badges</label>
            <div className="flex flex-wrap gap-2">
              {hero.techBadges.map((badge, i) => (
                <Badge key={i} variant="secondary" className="gap-1 px-3 py-2">
                  {badge}
                  <button onClick={() => setHero({...hero, techBadges: hero.techBadges.filter((b) => b !== badge)})} className="ml-1 text-muted-foreground hover:text-destructive"><X className="size-3" /></button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={newBadge} onChange={(e) => setNewBadge(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addBadge(); } }} placeholder="Badge name" className={`${inputClass} flex-1`} />
              <Button variant="outline" size="sm" onClick={addBadge}><Plus className="size-4" />Add</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
