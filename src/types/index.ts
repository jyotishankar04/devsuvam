export interface EducationItem {
    id: string;
    degree: string;
    institution: string;
    institutionUrl?: string;
    year: string;
    gpa?: string;
    description?: string;
    courses?: string[];
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
}

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
    content?: string
}