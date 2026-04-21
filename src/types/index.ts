export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    content?: string;
    videoUrl?: string;
    category?: string;
    gallery?: string[];
    status?: string;
    sortOrder?: number;
}

export interface Blog {
    id: string;
    slug: string;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
    description?: string;
    tags?: string[];
    excerpt?: string;
    status?: string;
    seoTitle?: string;
    seoDescription?: string;
    author?: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description?: string;
    works: string[];
    skills: string[];
    sortOrder: number;
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    institutionUrl?: string;
    duration: string;
    gpa?: string;
    isCurrent: boolean;
    sortOrder: number;
}

export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    sortOrder: number;
    skills: Skill[];
}

export interface Skill {
    id: string;
    name: string;
    icon: string;
    categoryId: string;
    sortOrder: number;
}

export interface SocialLink {
    id: string;
    name: string;
    url: string;
    username?: string;
    icon: string;
    platform?: string;
    sortOrder: number;
}

export interface HeroContent {
    id?: string;
    name: string;
    title: string;
    subtitle?: string;
    description: string;
    resumeUrl?: string;
    images: string[];
    techBadges: string[];
    ctaPrimary: string;
    ctaPrimaryUrl: string;
    ctaSecondary: string;
    ctaSecondaryUrl: string;
}

export interface AboutContent {
    id?: string;
    name: string;
    title: string;
    bio: string;
    avatarUrl?: string;
    email?: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    strengths: { icon: string; title: string; desc: string }[];
}

export interface GalleryItem {
    id: string;
    image: string;
    caption: string;
    mood?: string;
    date: string;
    featured?: boolean;
    sortOrder: number;
}

export interface Testimonial {
    id: string;
    name: string;
    role?: string;
    company?: string;
    content: string;
    avatar?: string;
    rating: number;
    featured: boolean;
    sortOrder: number;
}

export interface Achievement {
    id: string;
    title: string;
    description?: string;
    icon?: string;
    date?: string;
    sortOrder: number;
}

export interface NavigationItem {
    id: string;
    label: string;
    path: string;
    icon?: string;
    section: string;
    isExternal: boolean;
    sortOrder: number;
}

export interface MediaItem {
    id: string;
    filename: string;
    url: string;
    mimeType: string;
    size: number;
    alt?: string;
    createdAt: string;
}

export interface AdminUser {
    id: string;
    email: string;
    name: string;
    role: string;
}

export interface DashboardStats {
    projects: number;
    blogs: number;
    publishedBlogs: number;
    draftBlogs: number;
    featuredProjects: number;
    experience: number;
    education: number;
    skills: number;
    gallery: number;
    testimonials: number;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
