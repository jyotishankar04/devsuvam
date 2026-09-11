import { ArrowUpRightIcon, GraduationCapIcon } from "lucide-react"

import { Panel, PanelAnchorTitle, PanelHeader } from "@/components/layout/panel"
import { EDUCATION, type Education as EducationType } from "@/data"

const ID = "education"

function EducationItem({ item }: { item: EducationType }) {
  return (
    <li className="relative flex items-start gap-3 py-3">
      <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background">
        <GraduationCapIcon className="size-4" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-balance">{item.degree}</h3>
          {item.isCurrent && (
            <span className="relative flex items-center justify-center" aria-label="Current">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-success opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
          )}
        </div>

        <p className="mt-0.5 text-sm text-muted-foreground">
          {item.institutionUrl ? (
            <a
              href={item.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 link-underline"
            >
              {item.institution}
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          ) : (
            item.institution
          )}
        </p>

        {(item.duration || item.location || item.score) && (
          <p className="mt-1 flex flex-wrap items-center gap-x-2 font-mono text-xs text-muted-foreground tabular-nums">
            {[item.duration, item.location, item.score].filter(Boolean).map((part, i) => (
              <span key={part} className={i > 0 ? "before:mr-2 before:content-['·']" : undefined}>
                {part}
              </span>
            ))}
          </p>
        )}
      </div>
    </li>
  )
}

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelAnchorTitle id={ID}>Education</PanelAnchorTitle>
      </PanelHeader>

      <ul className="relative px-4 before:absolute before:top-6 before:bottom-6 before:left-7 before:w-px before:bg-border">
        {EDUCATION.map((item) => (
          <EducationItem key={item.degree} item={item} />
        ))}
      </ul>
    </Panel>
  )
}
