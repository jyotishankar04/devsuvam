import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router"

import { Panel, PanelAnchorTitle, PanelHeader } from "@/components/layout/panel"
import { WorkExperience } from "@/components/ncdai/work-experience"
import { EXPERIENCES } from "@/data"

const ID = "experience"

export function Experience({ showMoreLink = true }: { showMoreLink?: boolean }) {
  return (
    <Panel id={ID}>
      <PanelHeader className="flex items-end justify-between gap-4">
        <PanelAnchorTitle id={ID}>Experience</PanelAnchorTitle>
        {showMoreLink && (
          <Link
            to="/experience"
            className="group mb-1 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Timeline
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </PanelHeader>

      <WorkExperience className="bg-transparent pr-2" experiences={EXPERIENCES} />
    </Panel>
  )
}
