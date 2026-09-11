import type { ReactNode } from "react"
import { ArrowUpRightIcon, FileTextIcon } from "lucide-react"

import { Panel } from "@/components/layout/panel"
import { SOCIAL_LINKS, USER } from "@/data"
import { sound } from "@/lib/sound"

function Cell({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode
  title: string
  subtitle: string
}) {
  return (
    <>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-muted/40 text-muted-foreground transition-colors group-hover:bg-background group-hover:text-foreground [&_svg]:size-4.5">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="truncate font-mono text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
    </>
  )
}

const cellClass =
  "group flex items-center gap-3 bg-background p-3 transition-colors hover:bg-accent/40 sm:p-4"

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social links</h2>

      <div className="grid grid-cols-1 gap-px bg-line min-[420px]:grid-cols-2 sm:grid-cols-3">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cellClass}
            onClick={() => sound.click()}
          >
            <Cell icon={<link.icon />} title={link.name} subtitle={link.handle} />
          </a>
        ))}

        <a
          href={USER.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cellClass}
          onClick={() => sound.click()}
        >
          <Cell icon={<FileTextIcon />} title="Resume" subtitle="view as pdf" />
        </a>
      </div>
    </Panel>
  )
}
