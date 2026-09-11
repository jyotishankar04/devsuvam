import type { IconType } from "react-icons"
import { LuBot, LuBrainCircuit, LuMessageSquareCode, LuSparkles } from "react-icons/lu"
import {
  SiAmazonwebservices,
  SiCloudflareworkers,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TbApi, TbSql } from "react-icons/tb"

/**
 * The "Stack" section — mirrors "Technical Skills" on the resume.
 * Categories render in this order, numbered 01, 02, …
 * Icons: react-icons (si = Simple Icons brands, lu = Lucide, tb = Tabler).
 */
export type Skill = { name: string; icon?: IconType }
export type SkillCategory = { name: string; skills: Skill[] }

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: SiOpenjdk },
      { name: "SQL", icon: TbSql },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Zustand" },
      { name: "TanStack Query", icon: SiReactquery },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "WebSockets", icon: SiSocketdotio },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS (S3, EC2)", icon: SiAmazonwebservices },
      { name: "Nginx", icon: SiNginx },
      { name: "Cloudflare Workers", icon: SiCloudflareworkers },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    name: "AI Product Integration",
    skills: [
      { name: "AI Integration", icon: LuSparkles },
      { name: "AI Agents", icon: LuBot },
      { name: "Prompt Design", icon: LuMessageSquareCode },
      { name: "RAG-based Features", icon: LuBrainCircuit },
    ],
  },
]
