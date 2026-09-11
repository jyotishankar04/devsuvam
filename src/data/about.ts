import { CheckCircle2, Code2, Database, Server, type LucideIcon } from "lucide-react"

/** Content for the /about page. Education lives in ./education.ts. */
export const ABOUT = {
  bio: [
    "Full Stack Software Developer with hands-on experience building scalable backend systems and production-ready web applications. Skilled in Node.js, Express.js, PostgreSQL, and React/Next.js.",
    "Experienced in REST API design, database management, cloud deployments on AWS, and AI-integrated applications using LangChain and vector databases. Currently pursuing MCA at KIIT University while actively building and shipping real-world projects.",
  ],
  // `f_auto,q_auto,w_640` makes Cloudinary serve a resized WebP/AVIF (~36 KB vs 1.6 MB).
  photo:
    "https://res.cloudinary.com/djby1yfko/image/upload/f_auto,q_auto,w_640/v1779898427/ChatGPT_Image_May_27_2026_01_46_40_PM_ydztqj.png",
  skills: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "React / Next.js",
    "REST APIs",
    "AWS",
    "LangChain",
    "Vector Databases",
  ],
  strengths: [
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Production-ready web apps with React/Next.js and Node.js",
    },
    {
      icon: Server,
      title: "Backend & APIs",
      desc: "REST API design, WebSockets, GraphQL and scalable services",
    },
    {
      icon: Database,
      title: "Database Management",
      desc: "PostgreSQL, MongoDB, Redis, Prisma ORM",
    },
    {
      icon: CheckCircle2,
      title: "Cloud & AI Integration",
      desc: "AWS, Docker, CI/CD, plus RAG features with LangChain",
    },
  ] satisfies { icon: LucideIcon; title: string; desc: string }[],
}
