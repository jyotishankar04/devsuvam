import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { adminApi } from "@/lib/adminApi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FolderKanban, FileText, FileCheck, FileEdit,
  GraduationCap, Code2, Link2, Plus,
} from "lucide-react";
import type { DashboardStats } from "@/types";
import { StaggerList, StaggerItem } from "@/components/motion/Reveal";

const statConfig = [
  { key: "projects", label: "Projects", icon: FolderKanban, color: "text-blue-500" },
  { key: "featuredProjects", label: "Featured", icon: FolderKanban, color: "text-orange-500" },
  { key: "blogs", label: "Blogs", icon: FileText, color: "text-purple-500" },
  { key: "publishedBlogs", label: "Published", icon: FileCheck, color: "text-green-500" },
  { key: "draftBlogs", label: "Drafts", icon: FileEdit, color: "text-yellow-500" },
  { key: "education", label: "Education", icon: GraduationCap, color: "text-indigo-500" },
  { key: "skills", label: "Skills", icon: Code2, color: "text-pink-500" },
];

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    adminApi
      .get<DashboardStats>("/api/admin/stats")
      .then(setStats)
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load stats"))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-destructive">{error}</p>
        <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
          <p className="text-sm text-muted-foreground">Overview of your portfolio content</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => navigate("/admin/projects")}>
            <Plus className="size-4" />
            New Project
          </Button>
          <Button variant="outline" onClick={() => navigate("/admin/blogs")}>
            <Plus className="size-4" />
            New Blog
          </Button>
        </div>
      </div>

      <StaggerList className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 7 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <Skeleton className="mb-3 h-8 w-8 rounded-lg" />
                  <Skeleton className="mb-1 h-6 w-12" />
                  <Skeleton className="h-4 w-20" />
                </CardContent>
              </Card>
            ))
          : stats &&
            statConfig.map(({ key, label, icon: Icon, color }) => (
              <StaggerItem key={key}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className={`mb-3 ${color}`}>
                      <Icon className="size-6" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {stats[key as keyof DashboardStats] ?? 0}
                    </p>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
      </StaggerList>
    </div>
  );
}
