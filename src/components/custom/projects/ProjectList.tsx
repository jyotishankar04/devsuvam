import { motion } from "motion/react";

import type { Project } from "@/data";
import { cn } from "@/lib/utils";
import { ProjectCard, type ProjectLayout } from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  displayMode?: ProjectLayout;
}

export const ProjectList = ({ projects, displayMode = "grid" }: ProjectListProps) => {
  return (
    <div
      className={cn(
        "grid gap-px bg-line",
        displayMode === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      )}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          className="grid"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: (index % 4) * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ProjectCard project={project} layout={displayMode} />
        </motion.div>
      ))}
      {/* Keep the grid rectangular when the count is odd. */}
      {displayMode === "grid" && projects.length % 2 === 1 && (
        <div aria-hidden className="diagonal-stripes hidden bg-background sm:block" />
      )}
    </div>
  );
};
