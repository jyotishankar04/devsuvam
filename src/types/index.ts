export interface ExperienceItem {
    id: string;
    period: string;
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    workType: string;
    summary?: string;
    responsibilities: string[];
    skills: string[];
    showMore?: boolean;
}

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

export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    link?: string // optional live demo link
    github?: string // optional GitHub link
    image?: string // optional image URL
}

export interface PersonalInfoItem {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

export interface ButtonData {
    text: string;
    icon: React.ReactNode;
    href: string;
    variant?: "default" | "outline" | "ghost";
}

export interface ReadMoreData {
    expandedText: string;
    collapsedText: string;
    icon: React.ReactNode;
}

export interface SkillItem {
    name: string;
    technologies: string;
}

export interface MilestoneItem {
    year: string;
    event: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface AboutData {
    title: string;
    highlightedTitle: string;
    subtitle: string;
    description: string;
    profileImage: string;
    personalInfo: PersonalInfoItem[];
    expandedContent: {
        title: string;
        description: string;
        milestones?: MilestoneItem[];
    };
    buttons: {
        contact: ButtonData;
        downloadCV: ButtonData;
        readMore: ReadMoreData;
    };
}

export interface AboutPageData {
    meta: {
        title: string;
        description: string;
    };
    header: {
        title: string;
        highlightedTitle: string;
        subtitle: string;
    };
    intro: {
        description: string;
    };
    profile: {
        imageUrl: string;
        altText: string;
    };
    details: {
        personalInfo: PersonalInfoItem[];
        skills: SkillItem[];
    };
    journey: {
        title: string;
        description: string;
        milestones: MilestoneItem[];
    };
    callToAction: {
        buttons: ButtonData[];
        readMore: ReadMoreData;
    };
    socialLinks: SocialLink[];
}

// Projects
export interface ProjectLink {
    live?: string
    github?: string
}

export interface Project {
    id: string
    title: string
    description: string
    year: string
    tags: string[]
    links: ProjectLink
}

export interface ProjectDetails extends Project {
    content: {
        overview: string
        problem: string
        solution: string
        features: string[]
        technologies: string[]
        images: string[]
        challenges?: string[]
        learnings?: string[]
    }
}