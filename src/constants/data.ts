import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        slug: "quickbrain-ai",
        title: "QuickBrain AI",
        description:
            "AI-Powered Quiz Generator platform using LangChain, Gemini AI, and Pinecone for vector-based question retrieval.",
        tags: ["TypeScript", "LangChain", "Pinecone", "Gemini AI", "Next.js", "Tailwind CSS"],
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1746005123/Screenshot_from_2025-03-28_20-20-43_xnnmqe.png",
        liveUrl: "https://quickbrainai.netlify.app",
        githubUrl: "https://github.com/jyotishankar04/quickBrainAI-frontend",
        featured: true,
        content: ``
    },
    {
        id: "2",
        slug: "quizzify",
        title: "Quizzify",
        description:
            "Interactive Quiz Platform with AI question generation (Gemini API) and real-time feedback system.",
        tags: ["React", "Node.js", "PostgreSQL", "AI", "JWT", "Tailwind CSS"],
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1741372603/Screenshot_from_2025-03-08_00-05-22_tsohbh.png",
        githubUrl: "https://github.com/jyotishankar04/Quizzify",
        featured: true,
        content: ``
    },
    {
        id: "3",
        slug: "watch-ecommerce",
        title: "Watch E-commerce",
        description:
            "End-to-end e-commerce platform with Next.js, Express, and PostgreSQL with PhonePe payment integration.",
        tags: ["Next.js", "Express", "PostgreSQL", "E-commerce", "Payment", "Tailwind CSS"],
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1741372858/Screenshot_from_2025-03-08_00-10-46_yauyzv.png",
        githubUrl: "https://github.com/jyotishankar04/JustWatches",
        content: ``
    },
    {
        id: "4",
        slug: "nexgpt",
        title: "NexGPT",
        description:
            "Chat bot project using Google Gemini API with Cloudflare integration.",
        tags: ["Next.js", "AI", "Gemini", "Cloudflare"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/jyotishankar04/s-gpt",
        content: ``
    },
    {
        id: "5",
        slug: "expense-tracker",
        title: "Expense Mate",
        description:
            "A simple expense tracker app using nextjs and postgres with Cloudflare integration",
        tags: ["Next.js", "PostgreSQL", "Finance", "Cloudflare"],
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1741373061/Screenshot_from_2025-03-08_00-14-08_y7xft0.png",
        githubUrl: "https://github.com/jyotishankar04/expense-tracker",
        content: ``
    },
];