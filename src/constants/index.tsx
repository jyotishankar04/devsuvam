import type { AboutData, AboutPageData, EducationItem, ExperienceItem, Project,  } from "@/types";
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
       id: "4",
        degree: "Master in Computer Application",
        institution: "Kalinga Institute of Industrial Technology, BBSR",
        institutionUrl: "https://kiit.ac.in/",
        year: "2025 - 2027",
        gpa: "",
        description: "Currently Pursuing",
        courses: ["Data Structures and Algorithms", "Web Development", "Database Management", "Operating Systems", "Computer Networks", "Computer Architecture"]
    },
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
    },
    //  {
    //     id: "3",
    //     degree: "10th in Science",
    //     institution: "Matiali Nodal High School",
    //     year: "2018 - 2020",
    //     gpa: "66%",
    // }

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
            href: "https://drive.google.com/file/d/1GA9icfWLqSa4TF9L5egiwuGljV6oah9j/view?usp=sharing"
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
                href: "https://drive.google.com/file/d/1kXm8JRK7yYNwG-k9B_dvmNdNU6R-kaJ9/view?usp=sharing",
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

