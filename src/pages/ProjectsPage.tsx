import { useState } from "react";

import { ProjectList } from "@/components/custom/projects/ProjectList";
import type { ProjectLayout } from "@/components/custom/projects/ProjectCard";
import { ViewToggle } from "@/components/custom/ViewToggle";
import { CallToAction } from "@/components/home/cta";
import {
  MonoLabel,
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/layout/panel";
import { StripeSeparator } from "@/components/layout/separator";
import { PROJECTS, sortedProjects } from "@/data";

const STORAGE_KEY = "projects-view";

const readLayout = (): ProjectLayout => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "list" ? "list" : "grid";
  } catch {
    return "grid";
  }
};

export default function ProjectsPage() {
  const [layout, setLayout] = useState<ProjectLayout>(readLayout);

  const changeLayout = (next: ProjectLayout) => {
    setLayout(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  return (
    <>
      <Panel className="screen-line-top-none">
        <PanelHeader className="pt-10">
          <MonoLabel>Work / Side projects</MonoLabel>
          <div className="mt-2 flex items-end justify-between gap-4">
            <PanelTitle asChild>
              <h1>
                Projects
                <PanelTitleSup>{PROJECTS.length}</PanelTitleSup>
              </h1>
            </PanelTitle>
            <div className="mb-1">
              <ViewToggle value={layout} onChange={changeLayout} showLabels />
            </div>
          </div>
          <PanelDescription className="pt-2">
            Things I've built — from AI-powered tools to full-stack products. Mostly backend-heavy,
            always shipped.
          </PanelDescription>
        </PanelHeader>

        <ProjectList projects={sortedProjects()} displayMode={layout} />
      </Panel>

      <StripeSeparator />
      <CallToAction />
    </>
  );
}
