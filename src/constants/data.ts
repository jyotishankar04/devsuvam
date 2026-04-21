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
        content: `## Overview

QuickBrain AI is an AI-powered quiz generation platform that leverages LangChain for orchestration, Gemini AI for content generation, and Pinecone for vector-based question retrieval.

## Key Features

- **AI-Powered Quiz Generation** — Generate quizzes on any topic
- **Vector Search** — Semantic search for finding relevant questions
- **Real-time Feedback** — Instant scoring and explanations
- **Responsive Design** — Built with Next.js and Tailwind CSS

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, TypeScript
- **AI/ML:** LangChain, Google Gemini AI, Pinecone
- **Deployment:** Vercel, Netlify`
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
        content: `## Overview

Quizzify is an interactive quiz platform with AI-powered question generation using the Gemini API and real-time feedback.

## Key Features

- **AI Question Generation** — Dynamic quiz creation via Gemini API
- **Real-time Scoring** — Instant feedback on answers
- **User Authentication** — JWT-based auth system
- **PostgreSQL Backend** — Reliable data storage with Prisma ORM

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL, Prisma
- **AI:** Google Gemini API`
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
        content: `## Overview

A full-featured e-commerce platform for luxury watches built with Next.js and Express, featuring PhonePe payment integration.

## Key Features

- **Product Catalog** — Browse and search watches by category
- **Shopping Cart** — Add, remove, and manage items
- **PhonePe Integration** — Seamless UPI payments
- **Admin Dashboard** — Manage products and orders

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Express, Node.js
- **Database:** PostgreSQL
- **Payments:** PhonePe API`
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
        content: `## Overview

NexGPT is a chatbot project using Google Gemini API with Cloudflare integration for fast and reliable AI conversations.

## Key Features

- **AI Chat** — Conversational AI powered by Gemini
- **Cloudflare Integration** — Edge-optimized performance
- **Modern UI** — Clean Next.js interface

## Tech Stack

- **Frontend:** Next.js, React
- **AI:** Google Gemini API
- **Edge:** Cloudflare Workers`
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
        content: `## Overview

Expense Mate is a simple yet powerful expense tracking application built with Next.js and PostgreSQL.

## Key Features

- **Track Expenses** — Log and categorize daily expenses
- **Visual Reports** — Charts and summaries of spending patterns
- **Budget Management** — Set and track monthly budgets

## Tech Stack

- **Frontend:** Next.js, React
- **Backend:** PostgreSQL, Cloudflare
- **Deployment:** Cloudflare Pages`
    },
];