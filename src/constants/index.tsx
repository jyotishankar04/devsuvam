import type { AboutData, AboutPageData, EducationItem, ExperienceItem, Project, ProjectDetails } from "@/types";
import { Mail, Download, ChevronDown, Globe, Phone, GraduationCap } from "lucide-react";

export const experienceData: ExperienceItem[] = [
    {
        id: "1",
        period: "Jun 2025 - Aug 2025",
        title: "Full Stack Developer Intern",
        company: "Ansmake Technology",
        location: "Bangalore, India",
        workType: "Remote",
        summary: "Developing and optimizing web applications using modern technologies.",
        responsibilities: [
            "Developed and optimized RESTful APIs using FASTAPI, improving response times by 30%",
            "Implemented frontend components with Next.js, Tanstack Query, and Redix UI, enhancing user experience",
            "Collaborated with cross-functional teams to deliver SaaS product features on schedule",
            "Contributed to code refactoring and code quality improvements, leading to a 20% reduction in code complexity",
            "Participated in code reviews and provided constructive feedback to others, fostering a collaborative environment"
        ],
        skills: ["FastAPI", "Next.js", "React", "TypeScript", "PostgreSQL"],
        showMore: true
    }
];

export const educationData: EducationItem[] = [
    {
        id: "1",
        degree: "Bachelor of Science in Computer Science",
        institution: "Fakir Mohan Autonomous College",
        institutionUrl: "https://fmcollege.nic.in/",
        year: "2022 - 2025",
        gpa: "7.02/10.00",
        description: "Completed with distinction",
        courses: ["Data Structures and Algorithms", "Web Development", "Database Management", "Operating Systems", "Computer Networks", "Computer Architecture"]
    },
    {
        id: "2",
        degree: "12th in Science",
        institution: "Ramarani Institute of Technology",
        year: "2020 - 2022",
        gpa: "79%",
        description: "Completed with distinction",
        courses: ["Physics", "Chemistry", "Mathematics", "MIL", "English", "Computer Science"]
    }, {
        id: "3",
        degree: "10th in Science",
        institution: "Matiali Nodal High School",
        year: "2018 - 2020",
        gpa: "66%",
    }

];

export const ABOUT_DATA: AboutData = {
    title: "About",
    highlightedTitle: "Me",
    subtitle: "Get to know more about my background and skills",
    description: "I'm a Full-Stack Developer with a passion for building web applications. Currently working as an intern while completing my degree.",
    profileImage: "https://res.cloudinary.com/djby1yfko/image/upload/v1754135915/IMG_0066_hqidpa.jpg",
    personalInfo: [
        { label: "Name:", value: "Jyotishankar Patra" },
        { label: "Location:", value: "Balasore, Odisha, India" },
        { label: "Email:", value: "jyotipatra.subham@gmail.com" },
        { label: "Phone:", value: "+91-9861250893" }
    ],
    expandedContent: {
        title: "My Journey",
        description: "Started coding in 2020 and have since worked on various projects ranging from small business websites to complex web applications. Passionate about learning new technologies and solving real-world problems."
    },
    buttons: {
        contact: {
            text: "Contact Me",
            icon: <Mail className="w-4 h-4" />,
            href: "/contact"
        },
        downloadCV: {
            text: "Download CV",
            icon: <Download className="w-4 h-4" />,
            href: "/resume.pdf"
        },
        readMore: {
            expandedText: "Show Less",
            collapsedText: "Read More",
            icon: <ChevronDown className="w-4 h-4" />
        }
    }
};

export const ABOUT_PAGE_DATA: AboutPageData = {
    meta: {
        title: "About Me",
        description: "Learn more about my background, skills, and journey in web development"
    },
    header: {
        title: "About",
        highlightedTitle: "Me",
        subtitle: "Get to know more about my background and skills",
    },
    intro: {
        description: "I'm a passionate Full-Stack Developer with expertise in modern web technologies. I specialize in creating responsive, user-friendly applications with clean, efficient code.",
    },
    profile: {
        imageUrl: "https://res.cloudinary.com/djby1yfko/image/upload/v1754135915/IMG_0066_hqidpa.jpg",
        altText: "Profile photo of Jyotishankar Patra",
    },
    details: {
        personalInfo: [
            { label: "Full Name:", value: "Jyotishankar Patra", icon: <Mail className="w-4 h-4" /> },
            { label: "Location:", value: "Balasore, Odisha, India", icon: <Globe className="w-4 h-4" /> },
            { label: "Email:", value: "jyotipatra.subham@gmail.com", icon: <Mail className="w-4 h-4" /> },
            { label: "Phone:", value: "+91-9861250893", icon: <Phone className="w-4 h-4" /> },
            { label: "Education:", value: "BSc in Computer Science", icon: <GraduationCap className="w-4 h-4" /> },
        ],
        skills: [
            { name: "Frontend", technologies: "React, Next.js, TypeScript, Tailwind CSS, Shadcn UI" },
            { name: "Backend", technologies: "Node.js, Express, FastAPI, REST APIs, WebSockets" },
            { name: "Database", technologies: "PostgreSQL, MongoDB, Redis, Prisma ORM" },
            { name: "DevOps", technologies: "Docker, AWS, Nginx, Git, GitHub" },
        ],
    },
    journey: {
        title: "My Development Journey",
        description: "I began my coding journey in 2020 with basic programming. Over the years, I've worked on various projects from small business websites to complex AI applications. My passion lies in solving real-world problems through technology and continuously learning new frameworks and methodologies.",
        milestones: [
            { year: "2020", event: "Started learning programming basics" },
            { year: "2022", event: "Built first full-stack application" },
            { year: "2023", event: "Ranked in top 5% in CodeChef competition" },
            { year: "2024", event: "Started Full Stack Developer Internship" },
        ],
    },
    callToAction: {
        buttons: [
            {
                text: "Contact Me",
                icon: <Mail className="w-4 h-4" />,
                href: "/contact",
                variant: "default" as const,
            },
            {
                text: "Download CV",
                icon: <Download className="w-4 h-4" />,
                href: "https://drive.google.com/file/d/1GA9icfWLqSa4TF9L5egiwuGljV6oah9j/view?usp=sharing",
                variant: "outline" as const,
            },
            {
                text: "View Projects",
                icon: <ChevronDown className="w-4 h-4" />,
                href: "/projects",
                variant: "ghost" as const,
            },
        ],
        readMore: {
            expandedText: "Show Less",
            collapsedText: "Read More",
            icon: <ChevronDown className="w-4 h-4" />,
        },
    },
    socialLinks: [
        { name: "GitHub", url: "https://github.com/jyotishankar04", icon: "Github" },
        { name: "LinkedIn", url: "https://linkedin.com/in/jyotishankar-patra", icon: "Linkedin" },
        { name: "Twitter", url: "https://twitter.com/devsuvam1", icon: "Twitter" },
        { name: "Instagram", url: "https://instagram.com/dev.suvam", icon: "Instagram" },
        { name: "Email", url: "mailto:jyotipatra.subham@gmail.com", icon: "Mail" },
        { name: "Phone", url: "tel:+91-9861250893", icon: "Phone" },
    ],
};

export const allProjects: Project[] = [
    {
        id: "quickbrain-ai",
        title: "QuickBrain AI",
        description: "AI-Powered Quiz Generator platform using LangChain, Gemini AI, and Pinecone for vector-based question retrieval.",
        year: "2024",
        tags: ["AI", "Next.js", "FastAPI", "LangChain", "Gemini"],
        links: {
            live: "https://quickbrainai.netlify.app",
            github: "https://github.com/jyotishankar04/quickBrainAI-frontend"
        },
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1746005123/Screenshot_from_2025-03-28_20-20-43_xnnmqe.png"
    },
    {
        id: "quizzify",
        title: "Quizzify",
        description: "Interactive Quiz Platform with AI question generation (Gemini API) and real-time feedback system.",
        year: "2024",
        tags: ["React", "Node.js", "PostgreSQL", "AI", "JWT"],
        links: {
            live: "https://quizzifyai.vercel.app",
            github: "https://github.com/jyotishankar04/Quizzify"
        },
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1741372603/Screenshot_from_2025-03-08_00-05-22_tsohbh.png"
    },
    {
        id: "watch-ecommerce",
        title: "Watch E-commerce",
        description: "End-to-end e-commerce platform with Next.js, Express, and PostgreSQL with PhonePe payment integration.",
        year: "2023",
        tags: ["Next.js", "Express", "PostgreSQL", "E-commerce", "Payment"],
        links: {
            github: "https://github.com/jyotishankar04/JustWatches"
        },
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1741372858/Screenshot_from_2025-03-08_00-10-46_yauyzv.png"
    },
    {
        id: "nexgpt",
        title: "NexGPT",
        description: "Chat bot project using Google Gemini API with Cloudflare integration.",
        year: "2024",
        tags: ["Next.js", "AI", "Gemini", "Cloudflare"],
        links: {
            github: "https://github.com/jyotishankar04/s-gpt"
        }
    },
    {
        id: "expense-tracker",
        title: "Expense Mate",
        description: "A simple expense tracker app using nextjs and postgres with Cloudflare integration.",
        year: "2024",
        tags: ["Next.js", "PostgreSQL", "Finance", "Cloudflare"],
        links: {
            live: "https://expensemate.devsuvam.xyz",
            github: "https://github.com/jyotishankar04/expense-tracker"
        },
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1741373061/Screenshot_from_2025-03-08_00-14-08_y7xft0.png"
    }
];

export const getProjectDetails = (id: string): ProjectDetails | undefined => {
    const project = allProjects.find(p => p.id === id)
    if (!project) return undefined

    const detailsMap: Record<string, Omit<ProjectDetails, keyof Project>> = {
        "quickbrain-ai": {
            content: {
                overview: "AI-driven quiz platform that generates dynamic quizzes based on topic and difficulty with performance analytics.",
                problem: "Traditional quiz platforms lacked dynamic question generation and performance tracking.",
                solution: "Created an AI-powered platform that generates quizzes on demand and provides detailed analytics.",
                features: [
                    "Dynamic quiz generation based on topic/difficulty",
                    "Performance analytics dashboard",
                    "Responsive UI with React 19 + Vite",
                    "Robust backend with Express.js + Prisma",
                    "40% faster API response time through Redis caching"
                ],
                technologies: [
                    "LangChain for AI integration",
                    "Gemini AI for question generation",
                    "Pinecone for vector-based retrieval",
                    "React 19 with Vite for frontend",
                    "Express.js with Prisma for backend",
                    "Redis for caching"
                ],
                images: [
                    "https://res.cloudinary.com/djby1yfko/image/upload/v1746005123/Screenshot_from_2025-03-28_20-20-43_xnnmqe.png"
                ],
                challenges: [
                    "Optimizing AI response times",
                    "Implementing vector-based retrieval",
                    "Creating dynamic difficulty levels",
                    "Ensuring smooth user experience"
                ],
                learnings: [
                    "AI integration techniques",
                    "Vector database implementation",
                    "Performance optimization",
                    "Dynamic content generation"
                ]
            }
        },
        "quizzify": {
            content: {
                overview: "Full-stack quiz application with AI question generation and real-time feedback system.",
                problem: "Existing quiz apps lacked AI-generated questions and real-time feedback.",
                solution: "Built a platform with AI-generated questions and instant performance feedback.",
                features: [
                    "AI question generation (Gemini API)",
                    "JWT authentication with email/social login",
                    "Real-time feedback system",
                    "PostgreSQL database with Prisma ORM",
                    "95%+ test coverage with Jest"
                ],
                technologies: [
                    "Next.js for frontend",
                    "Node.js with Express for backend",
                    "PostgreSQL with Prisma ORM",
                    "Gemini API for AI",
                    "Jest for testing"
                ],
                images: [
                    "https://res.cloudinary.com/djby1yfko/image/upload/v1741372603/Screenshot_from_2025-03-08_00-05-22_tsohbh.png"
                ],
                challenges: [
                    "Implementing JWT authentication",
                    "Optimizing database queries",
                    "Achieving high test coverage",
                    "Integrating social login"
                ],
                learnings: [
                    "Authentication best practices",
                    "Database optimization",
                    "Testing methodologies",
                    "Third-party API integration"
                ]
            }
        },
        "watch-e-commerce": {
            content: {
                overview: "End-to-end e-commerce platform with Next.js, Express, and PostgreSQL with PhonePe payment integration.",
                problem: "Existing e-commerce platforms lacked payment integration.",
                solution: "Built a platform with PhonePe payment integration.",
                features: [
                    "Next.js for frontend",
                    "Express.js for backend",
                    "PostgreSQL with Prisma ORM",
                    "PhonePe payment integration",
                    "Cloudflare integration"
                ],
                technologies: [
                    "Next.js for frontend",
                    "Express.js for backend",
                    "PostgreSQL with Prisma ORM",
                    "PhonePe payment integration",
                    "Cloudflare integration"
                ],
                images: [
                    "https://res.cloudinary.com/djby1yfko/image/upload/v1741372858/Screenshot_from_2025-03-08_00-10-46_yauyzv.png"
                ],
                challenges: [
                    "Implementing payment integration",
                    "Optimizing database queries",
                    "Achieving high test coverage",
                    "Integrating social login"
                ],
                learnings: [
                    "Authentication best practices",
                    "Database optimization",
                    "Testing methodologies",
                    "Third-party API integration"
                ]
            }
        },
        "expense-tracker": {
            content: {
                overview: "A simple expense tracker app using nextjs and postgres with Cloudflare integration.",
                problem: "Existing e-commerce platforms lacked payment integration.",
                solution: "Built a platform with PhonePe payment integration.",
                features: [
                    "Next.js for frontend",
                    "Express.js for backend",
                    "PostgreSQL with Prisma ORM",
                    "PhonePe payment integration",
                    "Cloudflare integration"
                ],
                technologies: [
                    "Next.js for frontend",
                    "Express.js for backend",
                    "PostgreSQL with Prisma ORM",
                    "PhonePe payment integration",
                    "Cloudflare integration"
                ],
                images: ["https://res.cloudinary.com/djby1yfko/image/upload/v1741373061/Screenshot_from_2025-03-08_00-14-08_y7xft0.png"],
                challenges: [
                    "Implementing payment integration",
                    "Optimizing database queries",
                    "Achieving high test coverage",
                    "Integrating social login"
                ],
                learnings: [
                    "Authentication best practices",
                    "Database optimization",
                    "Testing methodologies",
                    "Third-party API integration"
                ]
            }
        },
        "nexgpt": {
            content: {
                overview: "Chat bot project using Google Gemini API with Cloudflare integration.",
                problem: "Existing e-commerce platforms lacked payment integration.",
                solution: "Built a platform with PhonePe payment integration.",
                features: [
                    "Next.js for frontend",
                    "Express.js for backend",
                    "PostgreSQL with Prisma ORM",
                    "PhonePe payment integration",
                    "Cloudflare integration"
                ],
                technologies: [
                    "Next.js for frontend",
                    "Express.js for backend",
                    "PostgreSQL with Prisma ORM",
                    "PhonePe payment integration",
                    "Cloudflare integration"
                ],
                images: ["https://res.cloudinary.com/djby1yfko/image/upload/v1741373061/Screenshot_from_2025-03-08_00-14-08_y7xft0.png"],
                challenges: [
                    "Implementing payment integration",
                    "Optimizing database queries",
                    "Achieving high test coverage",
                    "Integrating social login"
                ],
                learnings: [
                    "Authentication best practices",
                    "Database optimization",
                    "Testing methodologies",
                    "Third-party API integration"
                ]
            }
        },

    }

    return {
        ...project,
        ...detailsMap[id]
    }
}