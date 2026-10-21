import type { ElementType } from "react"
import {
  CloudIcon,
  Code2Icon,
  DatabaseIcon,
  MonitorSmartphoneIcon,
  ServerIcon,
  SparklesIcon,
} from "lucide-react"
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
 * `color` is each brand's official mark color, shown on the icon only — skills
 * without an established brand color (generic concepts, monochrome logos) omit it
 * and fall back to the default muted icon color.
 */
export type Skill = { name: string; icon?: IconType; color?: string }
export type SkillCategory = { name: string; icon: ElementType; skills: Skill[] }

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code2Icon,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "SQL", icon: TbSql },
    ],
  },
  {
    name: "Frontend",
    icon: MonitorSmartphoneIcon,
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Zustand" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
    ],
  },
  {
    name: "Backend",
    icon: ServerIcon,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "WebSockets", icon: SiSocketdotio },
    ],
  },
  {
    name: "Databases",
    icon: DatabaseIcon,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: CloudIcon,
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS (S3, EC2)", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Cloudflare Workers", icon: SiCloudflareworkers, color: "#F38020" },
      { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    name: "AI Product Integration",
    icon: SparklesIcon,
    skills: [
      { name: "AI Integration", icon: LuSparkles, color: "#8B5CF6" },
      { name: "AI Agents", icon: LuBot, color: "#A855F7" },
      { name: "Prompt Design", icon: LuMessageSquareCode, color: "#D946EF" },
      { name: "RAG-based Features", icon: LuBrainCircuit, color: "#6366F1" },
    ],
  },
]

/** Total number of individual skills across all categories, for the section's count badge. */
export const SKILLS_COUNT = SKILLS.reduce((sum, category) => sum + category.skills.length, 0)
