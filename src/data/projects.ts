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
  /** Looping scroll-through clip of the live site, shown on card hover in place of the static image. */
  video?: string
  liveUrl?: string
  githubUrl?: string
  /** npm (or other registry) page for packages/CLIs. */
  packageUrl?: string
  featured?: boolean
  /** The current flagship project — sorted first and visually highlighted everywhere. At most one at a time. */
  pinned?: boolean
  content?: string
}

export const PROJECTS: Project[] = [
  // ── On the resume ──────────────────────────────────────────────
  {
    slug: "savedly",
    title: "Savedly",
    description:
      "Open-source second brain — save links, notes, screenshots and PDFs, then find them again by keyword or meaning and ask questions of what you saved. Self-hostable.",
    tags: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "pgvector", "Drizzle", "BullMQ", "LangGraph"],
    image: "/projects/savedly.png",
    video: "/projects/savedly.mp4",
    liveUrl: "https://savedly.app",
    githubUrl: "https://github.com/jyotishankar04/savedly",
    featured: true,
    pinned: true,
    content: `## Overview

Savedly is an open-source "second brain" — send it a link, note, image or document and it's read, summarized, tagged and made searchable automatically, the same pipeline every time. Ask it a question in plain English and it answers from what you've actually saved, citing the memory it came from.

Free and self-hostable with every feature unlocked, using your own AI key (OpenAI, Anthropic, Groq, Google, or any OpenAI-compatible endpoint).

## Highlights

- **Automatic enrichment** — captures are read, summarized, tagged and embedded on the way in, with no manual tagging required.
- **Hybrid search** — keyword and semantic (meaning-based) search merged into a single ranked list.
- **Ask Savedly** — a chat assistant over saved content that can create, edit, organize and delete memories directly.
- **Collections, sharing and a PIN-gated vault**, plus Google Calendar / Outlook sync for AI-detected events.

## Tech Stack

- **Server:** Express, TypeScript, Drizzle ORM, PostgreSQL with pgvector, BullMQ, LangGraph
- **Client:** Next.js (App Router), React, Tailwind CSS
- **Extension:** Vite, React, Chrome Manifest V3`,
  },
  {
    slug: "bringbucket",
    title: "BYOC / BringBucket",
    description:
      "Bring-your-own-cloud storage SaaS — connect your own AWS S3 or Cloudflare R2 buckets and manage files from one workspace dashboard.",
    tags: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "AWS S3", "Cloudflare R2"],
    image: "/projects/bringbucket.png",
    video: "/projects/bringbucket.mp4",
    githubUrl: "https://github.com/jyotishankar04/BYOC",
    liveUrl: "https://bringbucket.vercel.app",
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
    image: "/projects/startxkit.png",
    video: "/projects/startxkit.mp4",
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
    image: "/projects/odialang.png",
    video: "/projects/odialang.mp4",
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
    content: `## Overview

QuickBrain AI is an AI-powered note-taking and semantic search system that lets users retrieve relevant notes using natural language queries instead of exact keyword matching.

## Highlights

- **RAG pipeline** — LangChain, the Pinecone vector database, embeddings and Gemini AI power document understanding, note summaries and contextual responses.
- **REST APIs** — manage users, notes, uploaded content, metadata and AI-generated outputs.

## Tech Stack

- **Backend:** Node.js, Express.js, PostgreSQL, Prisma
- **AI:** LangChain, Pinecone, Gemini AI`,
  }
]

/** Pinned first, then featured, then the rest in original order. */
export const sortedProjects = () => [
  ...PROJECTS.filter((p) => p.pinned),
  ...PROJECTS.filter((p) => !p.pinned && p.featured),
  ...PROJECTS.filter((p) => !p.pinned && !p.featured),
]

export const getProject = (slug?: string) => PROJECTS.find((p) => p.slug === slug)
