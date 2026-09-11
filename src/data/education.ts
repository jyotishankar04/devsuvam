/** Education timeline — newest first. `isCurrent` shows a live green dot. */
export type Education = {
  degree: string
  institution: string
  institutionUrl?: string
  location?: string
  duration?: string
  /** Shown after the duration, e.g. "CGPA 7.02 / 10.00" or "79%". */
  score?: string
  isCurrent?: boolean
}

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    institutionUrl: "https://kiit.ac.in",
    location: "Bhubaneswar, Odisha",
    duration: "2025 — Present",
    isCurrent: true,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Fakir Mohan Autonomous College",
    location: "Balasore, Odisha",
    duration: "2022 — 2025",
    score: "CGPA 7.02 / 10.00",
  },
  {
    degree: "Higher Secondary (Class XII) — Science",
    institution: "Ramarani Institute of Technology",
    location: "Balasore, Odisha",
    duration: "2020 — 2022",
    score: "79%",
  },
]

export type Certification = {
  title: string
  issuer: string
  year: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Practical GitHub Actions",
    issuer: "LinkedIn Learning Certificate",
    year: "2026",
  },
  {
    title: "100xDevs Full Stack Web Development",
    issuer: "Harkirat Singh, Cohort 2.0",
    year: "2024",
  },
]
