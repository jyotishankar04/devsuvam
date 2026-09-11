import type { IconType } from "react-icons"
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"

export const USER = {
  firstName: "Jyotishankar",
  displayName: "Jyotishankar Patra",
  username: "jyotishankar04",
  title: "Full Stack Software Developer",
  flipSentences: [
    "Full Stack Software Developer",
    "Building scalable backend systems",
    "Node.js · PostgreSQL · React · AWS",
    "Shipping AI-integrated products with RAG",
  ],
  bio: "Full Stack Software Developer building scalable backend systems and production-ready web applications.",
  location: "Odisha, India",
  timeZone: "Asia/Kolkata",
  email: "jyotishankar.dev@gmail.com",
  phone: "+91-9861250893",
  avatar: "/dp.png",
  resumeUrl:
    "https://res.cloudinary.com/djby1yfko/image/upload/v1768676198/Jyotishankars_resume_twuz3f.pdf",
  githubUrl: "https://github.com/jyotishankar04",
  current: {
    title: "MCA Student",
    company: "KIIT University",
    website: "https://kiit.ac.in",
  },
  previous: {
    title: "Full Stack Developer Intern",
    company: "Ansmake Technology",
  },
} as const

export type SocialLink = {
  name: string
  handle: string
  url: string
  icon: IconType
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    handle: "@jyotishankar04",
    url: "https://github.com/jyotishankar04",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "jyotishankar-patra",
    url: "https://linkedin.com/in/jyotishankar-patra",
    icon: FaLinkedin,
  },
  {
    name: "X (Twitter)",
    handle: "@devsuvam1",
    url: "https://x.com/devsuvam1",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    handle: "@devsuvam",
    url: "https://instagram.com/devsuvam",
    icon: FaInstagram,
  },
  {
    name: "Email",
    handle: USER.email,
    url: `mailto:${USER.email}`,
    icon: MdOutlineEmail,
  },
]

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blogs" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Setup", path: "/setup" },
] as const
