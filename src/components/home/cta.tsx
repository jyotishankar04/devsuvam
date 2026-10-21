import { ArrowUpRightIcon, CoffeeIcon, FileTextIcon } from "lucide-react"
import { toast } from "sonner"

import { Panel } from "@/components/layout/panel"
import { CopyButton } from "@/components/ncdai/copy-button"
import { Button } from "@/components/ui/button"
import { USER } from "@/data"
import { sound } from "@/lib/sound"

export function CallToAction({
  title = "Let's build something reliable.",
  description = "Open to internships, full-time roles and interesting collaborations — backend-heavy work especially.",
}: {
  title?: string
  description?: string
}) {
  return (
    <Panel className="relative overflow-hidden">
      <div aria-hidden className="diagonal-stripes absolute inset-y-0 right-0 w-1/3 mask-l-from-0% mask-l-to-100% opacity-60" />

      <div className="relative flex flex-col gap-5 p-4 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md space-y-2">
          <p className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Available for work
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-balance sm:text-3xl">{title}</h2>
          <p className="text-sm text-balance text-muted-foreground">{description}</p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-md border border-line">
              <Button variant="ghost" size="sm" className="rounded-r-none" asChild>
                <a href={`mailto:${USER.email}`} onClick={() => sound.click()}>
                  Email me
                  <ArrowUpRightIcon />
                </a>
              </Button>
              <CopyButton
                text={USER.email}
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-l-none border-l border-line"
                onCopySuccess={() => toast.success("Email copied to clipboard")}
              />
            </div>
            <Button size="sm" asChild>
              <a href={USER.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => sound.click()}>
                <FileTextIcon />
                Resume
              </a>
            </Button>
          </div>

          <a
            href={USER.buyMeACoffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click()}
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <CoffeeIcon className="size-3.5 transition-transform group-hover:-rotate-12" />
            <span className="link-underline">or buy me a coffee</span>
          </a>
        </div>
      </div>
    </Panel>
  )
}
