import { useRef } from "react"
import { BadgeCheckIcon } from "lucide-react"
import { motion, useInView, usePageInView } from "motion/react"

import { useTheme } from "@/components/theme-provider"
import { DotGridSpotlight } from "@/components/ncdai/dot-grid-spotlight"
import { TextFlip } from "@/components/ncdai/text-flip"
import { USER } from "@/data"
import { cn } from "@/lib/utils"

const DOT_COLORS = {
  dark: { dot: "rgba(255, 255, 255, 0.09)", active: "rgba(255, 255, 255, 0.55)" },
  light: { dot: "rgba(9, 9, 11, 0.09)", active: "rgba(9, 9, 11, 0.5)" },
}

function FlipSentences({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isPageInView = usePageInView()
  const isInView = useInView(ref)

  return (
    <div ref={ref} className={className}>
      <TextFlip
        className="shimmer font-mono text-sm text-balance text-muted-foreground shimmer-duration-1500 shimmer-once not-dark:shimmer-color-foreground"
        interval={3}
        play={isPageInView && isInView}
      >
        {USER.flipSentences.map((sentence) => sentence)}
      </TextFlip>
    </div>
  )
}

function HandwrittenArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-8 w-12", className)}
      aria-hidden
    >
      <path d="M56 6C44 4 22 8 10 30" />
      <path d="M6 20l4 11 10-5" />
    </svg>
  )
}

export function ProfileHeader() {
  const { resolvedTheme } = useTheme()
  const colors = DOT_COLORS[resolvedTheme]

  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] border-x border-line">
      <figure className="relative col-span-2 h-36 overflow-hidden sm:col-span-1 sm:col-start-2 sm:h-44">
        <DotGridSpotlight
          key={resolvedTheme}
          className="absolute inset-0"
          dotColor={colors.dot}
          activeDotColor={colors.active}
          spacing={12}
          interactionRadius={110}
        />

        <div className="pointer-events-none absolute inset-0 bg-radial-[at_70%_40%] from-transparent via-transparent to-background/80" />

        <motion.div
          className="pointer-events-none absolute right-4 bottom-10 hidden flex-col items-end text-muted-foreground pointer-fine:flex"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden
        >
          <span className="-rotate-6 font-handwritten text-lg leading-none">
            move your cursor here
          </span>
          <HandwrittenArrow className="mr-24 -scale-x-100 rotate-12" />
        </motion.div>

        <figcaption className="pointer-events-none absolute right-2 bottom-2 font-mono text-xs leading-none tracking-wide text-muted-foreground/60 tabular-nums select-none sm:right-4 sm:bottom-3">
          Fig. 1.
        </figcaption>
      </figure>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <motion.img
            src={USER.avatar}
            alt={USER.displayName}
            className="mx-0.5 my-0.75 size-28 rounded-full object-cover ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <motion.h1
              className="-translate-y-px py-1 text-[1.75rem]/none font-medium tracking-tight sm:text-[2rem]/none"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {USER.displayName}
            </motion.h1>
            <BadgeCheckIcon
              className="size-5 shrink-0 fill-info text-background select-none"
              aria-label="Verified"
            />
          </div>

          <FlipSentences className="flex h-12.5 items-center border-t border-line py-1 pl-4 sm:h-9" />
        </div>
      </div>
    </div>
  )
}
