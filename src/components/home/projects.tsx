import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router"

import { ProjectList } from "@/components/custom/projects/ProjectList"
import { Panel, PanelAnchorTitle, PanelHeader } from "@/components/layout/panel"
import { PROJECTS, sortedProjects } from "@/data"

const ID = "projects"

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader className="flex items-end justify-between gap-4">
        <PanelAnchorTitle id={ID} sup={PROJECTS.length}>
          Projects
        </PanelAnchorTitle>
        <Link
          to="/projects"
          className="group mb-1 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          All projects
          <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </PanelHeader>

      <ProjectList projects={sortedProjects().slice(0, 4)} displayMode="grid" />
    </Panel>
  )
}
