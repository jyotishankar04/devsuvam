/**
 * Projects shown on the home page (first 4) and on /projects.
 * `content` is markdown rendered on /projects/:slug.
 * Featured projects are listed first, then the rest in array order.
 */
export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  /** npm (or other registry) page for packages/CLIs. */
  packageUrl?: string
  featured?: boolean
  content?: string
}

/** GitHub's auto-generated social card for a repo — used when there's no screenshot. */
const ghCard = (repo: string) => `https://opengraph.githubassets.com/1/jyotishankar04/${repo}`

export const PROJECTS: Project[] = [
  // ── On the resume ──────────────────────────────────────────────
  {
    slug: "bringbucket",
    title: "BYOC / BringBucket",
    description:
      "Bring-your-own-cloud storage SaaS — connect your own AWS S3 or Cloudflare R2 buckets and manage files from one workspace dashboard.",
    tags: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "AWS S3", "Cloudflare R2"],
    image: ghCard("BYOC"),
    githubUrl: "https://github.com/jyotishankar04/BYOC",
    featured: true,
    content: `## Overview

BringBucket is a BYOC ("bring your own cloud") storage SaaS platform. Users connect their own AWS S3 or Cloudflare R2 buckets and manage files through a unified workspace dashboard.

## Highlights

- **Direct-to-cloud uploads** — multipart uploads using presigned URLs, so large files go straight from the client to the bucket without routing file data through the backend server.
- **Workspace access control** — Owner, Admin, Member and Viewer roles.
- **Security** — encrypted cloud provider credentials, plus secure file sharing with expiry and password protection.

## Tech Stack

- **Frontend:** Next.js, TypeScript
- **Backend:** Express.js, PostgreSQL, Prisma
- **Storage:** AWS S3, Cloudflare R2`,
  },
  {
    slug: "startxkit",
    title: "StartXKit",
    description:
      "TypeScript backend boilerplate generator for Express, Fastify and Hono — modular architecture with CLI-based project scaffolding.",
    tags: ["TypeScript", "CLI", "Express", "Fastify", "Hono", "Open Source"],
    image: ghCard("startxkit"),
    githubUrl: "https://github.com/jyotishankar04/startxkit",
    liveUrl: "https://startxkit.js.org",
    packageUrl: "https://npmx.dev/package/startxkit",
    content: `## Overview

StartXKit is an open-source TypeScript backend boilerplate generator for **Express**, **Fastify** and **Hono**, with a modular architecture and CLI-based project scaffolding.

Published on npm — see the package page for usage.`,
  },
  {
    slug: "odialang",
    title: "Odialang",
    description:
      "An Odia keyword-based programming language that lets you write code in Odia.",
    tags: ["Programming Language", "npm", "Open Source"],
    image: ghCard("odialang"),
    liveUrl: "https://odialang.js.org",
    githubUrl: "https://github.com/jyotishankar04/odialang",
    packageUrl: "https://npmx.dev/package/@devsuvam/odialang",
    content: `## Overview

Odialang is a programming language whose keywords are in **Odia**, making it possible to write and run code in the Odia language.

Published on npm as \`@devsuvam/odialang\`.`,
  },

  {
    slug: "quickbrain-ai",
    title: "QuickBrain AI",
    description:
      "AI-powered note-taking and semantic search — find relevant notes with natural-language queries instead of exact keywords.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "LangChain", "Pinecone", "Gemini AI"],
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1746005123/Screenshot_from_2025-03-28_20-20-43_xnnmqe.png",
    liveUrl: "https://quickbrainai.netlify.app",
    githubUrl: "https://github.com/jyotishankar04/QuickBrainAI",
    featured: true,
    content: `## Overview

QuickBrain AI is an AI-powered note-taking and semantic search system that lets users retrieve relevant notes using natural language queries instead of exact keyword matching.

## Highlights

- **RAG pipeline** — LangChain, the Pinecone vector database, embeddings and Gemini AI power document understanding, note summaries and contextual responses.
- **REST APIs** — manage users, notes, uploaded content, metadata and AI-generated outputs.

## Tech Stack

- **Backend:** Node.js, Express.js, PostgreSQL, Prisma
- **AI:** LangChain, Pinecone, Gemini AI`,
  },
  // ── More projects ──────────────────────────────────────────────
  {
    slug: "quizzify",
    title: "Quizzify",
    description:
      "Interactive Quiz Platform with AI question generation (Gemini API) and real-time feedback system.",
    tags: ["React", "Node.js", "PostgreSQL", "AI", "JWT", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741372603/Screenshot_from_2025-03-08_00-05-22_tsohbh.png",
    githubUrl: "https://github.com/jyotishankar04/Quizzify",
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
- **AI:** Google Gemini API`,
  },
  {
    slug: "watch-ecommerce",
    title: "Watch E-commerce",
    description:
      "End-to-end e-commerce platform with Next.js, Express, and PostgreSQL with PhonePe payment integration.",
    tags: ["Next.js", "Express", "PostgreSQL", "E-commerce", "Payment", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741372858/Screenshot_from_2025-03-08_00-10-46_yauyzv.png",
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
- **Payments:** PhonePe API`,
  },
  {
    slug: "nexgpt",
    title: "NexGPT",
    description: "Chat bot project using Google Gemini API with Cloudflare integration.",
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
- **Edge:** Cloudflare Workers`,
  },
  {
    slug: "expense-tracker",
    title: "Expense Mate",
    description:
      "A simple expense tracker app using Next.js and Postgres with Cloudflare integration.",
    tags: ["Next.js", "PostgreSQL", "Finance", "Cloudflare"],
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741373061/Screenshot_from_2025-03-08_00-14-08_y7xft0.png",
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
- **Deployment:** Cloudflare Pages`,
  },
]

/** Featured first, original order otherwise. */
export const sortedProjects = () => [
  ...PROJECTS.filter((p) => p.featured),
  ...PROJECTS.filter((p) => !p.featured),
]

export const getProject = (slug?: string) => PROJECTS.find((p) => p.slug === slug)
