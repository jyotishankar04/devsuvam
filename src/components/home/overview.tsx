import type { ReactNode } from "react"
import {
  BriefcaseBusinessIcon,
  ClockIcon,
  FileTextIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Panel, PanelContent } from "@/components/layout/panel"
import { CopyButton } from "@/components/ncdai/copy-button"
import { USER } from "@/data"
import { timeZoneOffsetLabel, useLocalTime } from "@/hooks/use-local-time"

function IntroItem({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex min-w-0 items-center gap-4 font-mono text-sm">
      <div
        aria-hidden
        className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:size-3.5"
      >
        {icon}
      </div>
      <div className="min-w-0 text-balance">{children}</div>
    </div>
  )
}

export function Overview() {
  const time = useLocalTime(USER.timeZone)

  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        <IntroItem icon={<GraduationCapIcon />}>
          {USER.current.title} @{" "}
          <a
            className="link-underline"
            href={USER.current.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {USER.current.company}
          </a>
        </IntroItem>

        <IntroItem icon={<BriefcaseBusinessIcon />}>
          <span className="text-muted-foreground">prev.</span> {USER.previous.title} @{" "}
          {USER.previous.company}
        </IntroItem>

        <IntroItem icon={<MapPinIcon />}>
          <a
            className="link-underline"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.location)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {USER.location}
          </a>
        </IntroItem>

        <IntroItem icon={<ClockIcon />}>
          <span className="tabular-nums">{time}</span>
          <span className="text-muted-foreground"> // {timeZoneOffsetLabel(USER.timeZone)}</span>
        </IntroItem>

        <IntroItem icon={<MailIcon />}>
          <span className="inline-flex items-center gap-1">
            <a className="link-underline truncate" href={`mailto:${USER.email}`}>
              {USER.email}
            </a>
            <CopyButton
              text={USER.email}
              variant="ghost"
              className="size-6 text-muted-foreground [&_svg]:size-3.5"
              onCopySuccess={() => toast.success("Email copied to clipboard")}
            />
          </span>
        </IntroItem>

        <IntroItem icon={<FileTextIcon />}>
          <a className="link-underline" href={USER.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <span className="text-muted-foreground"> // pdf</span>
        </IntroItem>
      </PanelContent>
    </Panel>
  )
}
