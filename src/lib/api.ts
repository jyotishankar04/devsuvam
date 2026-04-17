import { useQuery } from "@tanstack/react-query";
import type {
  Project, Blog, Experience, Education, SkillCategory, SocialLink,
  HeroContent, AboutContent, GalleryItem, NavigationItem,
} from "@/types";

const apiUrl = import.meta.env.VITE_API_URL;

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${apiUrl}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// ── Blogs ──
export const useGetBlogs = () =>
  useQuery({ queryKey: ["blogs"], queryFn: () => fetchJson<Blog[]>("/blogs") });

export const useGetABlog = (slug: string) =>
  useQuery({ queryKey: ["blog", slug], queryFn: () => fetchJson<Blog>(`/blogs/${slug}`), enabled: !!slug });

// ── Projects ──
export const useGetProjects = () =>
  useQuery({ queryKey: ["projects"], queryFn: () => fetchJson<Project[]>("/api/projects") });

export const useGetProject = (slug?: string) =>
  useQuery({ queryKey: ["project", slug], queryFn: () => fetchJson<Project>(`/api/projects/${slug}`), enabled: !!slug });

// ── Experience ──
export const useGetExperience = () =>
  useQuery({ queryKey: ["experience"], queryFn: () => fetchJson<Experience[]>("/api/experience") });

// ── Education ──
export const useGetEducation = () =>
  useQuery({ queryKey: ["education"], queryFn: () => fetchJson<Education[]>("/api/education") });

// ── Skills ──
export const useGetSkills = () =>
  useQuery({ queryKey: ["skills"], queryFn: () => fetchJson<SkillCategory[]>("/api/skills") });

// ── Social Links ──
export const useGetSocialLinks = () =>
  useQuery({ queryKey: ["socialLinks"], queryFn: () => fetchJson<SocialLink[]>("/api/social-links") });

// ── Hero ──
export const useGetHero = () =>
  useQuery({ queryKey: ["hero"], queryFn: () => fetchJson<HeroContent>("/api/hero") });

// ── About ──
export const useGetAbout = () =>
  useQuery({ queryKey: ["about"], queryFn: () => fetchJson<AboutContent>("/api/about") });

// ── Gallery ──
export const useGetGallery = () =>
  useQuery({ queryKey: ["gallery"], queryFn: () => fetchJson<GalleryItem[]>("/api/gallery") });

// ── Navigation ──
export const useGetNavigation = (section?: string) =>
  useQuery({
    queryKey: ["navigation", section],
    queryFn: () => fetchJson<NavigationItem[]>(`/api/navigation${section ? `?section=${section}` : ""}`),
  });

// ── Settings ──
export const useGetSettings = () =>
  useQuery({ queryKey: ["settings"], queryFn: () => fetchJson<Record<string, string>>("/api/settings") });

// ── Homepage (bulk) ──
export const useGetHomepage = () =>
  useQuery({
    queryKey: ["homepage"],
    queryFn: () =>
      fetchJson<{
        projects: Project[];
        experience: Experience[];
        education: Education[];
        skills: SkillCategory[];
        hero: HeroContent;
        gallery: GalleryItem[];
        socialLinks: SocialLink[];
      }>("/api/homepage"),
  });
