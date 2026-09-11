import type React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

// Panel primitives adapted from chanhdai.com: sections framed by the column's
// vertical rails, with full-bleed hairlines above and below.

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn("screen-line-top screen-line-bottom border-x border-line", className)}
      {...props}
    />
  )
}

function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn("screen-line-bottom px-4", className)}
      {...props}
    />
  )
}

function PanelTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      data-slot="panel-title"
      className={cn("text-3xl font-medium tracking-tight text-balance", className)}
      {...props}
    />
  )
}

function PanelTitleSup({ className, ...props }: React.ComponentProps<"sup">) {
  return (
    <sup
      className={cn(
        "top-[-0.75em] ml-1 font-mono text-sm font-normal tracking-normal text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/** Anchor title: "Projects" that links to #projects, like chanhdai.com. */
function PanelAnchorTitle({
  id,
  children,
  sup,
  className,
}: {
  id: string
  children: React.ReactNode
  sup?: React.ReactNode
  className?: string
}) {
  return (
    <PanelTitle className={className}>
      <a href={`#${id}`} className="group/anchor">
        {children}
        <span
          aria-hidden
          className="ml-2 font-mono text-lg text-muted-foreground/0 transition-colors group-hover/anchor:text-muted-foreground/60"
        >
          #
        </span>
      </a>
      {sup !== undefined && <PanelTitleSup>{sup}</PanelTitleSup>}
    </PanelTitle>
  )
}

function PanelDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="panel-description"
      className={cn("pb-4 text-base text-balance text-muted-foreground", className)}
      {...props}
    />
  )
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
}

/** Small uppercase mono label, used for section kickers and figure captions. */
function MonoLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-xs tracking-wide text-muted-foreground uppercase",
        className
      )}
      {...props}
    />
  )
}

export {
  MonoLabel,
  Panel,
  PanelAnchorTitle,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
}
