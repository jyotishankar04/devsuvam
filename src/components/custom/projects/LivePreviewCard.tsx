import type { ReactNode } from "react"
import { ArrowUpRightIcon } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"
import type { Project } from "@/data"

const hostnameOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

/** The glowing dark preview card shown on hover/focus of a project's live link. */
function LivePreviewContent({ project }: { project: Project }) {
  if (!project.liveUrl) return null

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-neutral-950 p-2 ring-1 ring-violet-500/25",
        "shadow-[0_0_60px_-12px_rgba(124,58,237,0.5)]"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-[at_50%_0%] from-violet-500/25 via-transparent to-transparent"
      />

      <div className="relative aspect-1200/630 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-sky-500/25 via-violet-500/15 to-rose-500/10 p-2">
        {project.image ? (
          <div className="size-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="size-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="size-full rounded-lg bg-neutral-800" />
        )}
      </div>

      <div className="relative flex items-center justify-between gap-2 px-1.5 pt-2 pb-1">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">{project.title}</p>
          <p className="truncate font-mono text-xs text-white/50">
            {hostnameOf(project.liveUrl)}
          </p>
        </div>
        <ArrowUpRightIcon className="size-3.5 shrink-0 text-white/50" />
      </div>
    </div>
  )
}

/** Wraps `children` (the live-link trigger) with a hover/focus preview of the live site. */
export function ProjectLivePreview({
  project,
  children,
}: {
  project: Project
  children: ReactNode
}) {
  if (!project.liveUrl) return children

  return (
    <HoverCard openDelay={150} closeDelay={80}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="center"
        className="w-72 border-none bg-transparent p-0 shadow-none"
      >
        <LivePreviewContent project={project} />
      </HoverCardContent>
    </HoverCard>
  )
}
