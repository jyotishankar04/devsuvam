import type { ExperienceItemType } from "@/components/ncdai/work-experience"

/**
 * Work history — newest first. Dates use "MM.YYYY"; omit `end` for a current role.
 * `description` is markdown (bullets render as a list).
 */
export const EXPERIENCES: ExperienceItemType[] = [
  {
    id: "ansmake",
    companyName: "Ansmake Technology",
    positions: [
      {
        id: "ansmake-fs-intern",
        title: "Full Stack Developer Intern",
        employmentPeriod: { start: "06.2025", end: "08.2025" },
        employmentType: "Internship · Remote",
        description: [
          "- Built a backend file upload system with **vector embeddings** to support AI-based document processing, integrating with a language model pipeline for semantic retrieval.",
          "- Developed a full frontend interface using **Next.js**, including a dynamic sidebar, file listing tree, and an interactive chat UI connected to backend AI services.",
        ].join("\n"),
        skills: ["Next.js", "Vector Embeddings", "LLM Pipelines", "Semantic Retrieval", "Chat UI"],
        isExpanded: true,
      },
    ],
  },
]
