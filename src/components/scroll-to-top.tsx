import { useState } from "react"
import { ArrowUpIcon } from "lucide-react"
import { useLenis } from "lenis/react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"

import { sound } from "@/lib/sound"

/** Appears after 400px; dims while scrolling down, brightens on scroll up. */
export function ScrollToTop() {
  const lenis = useLenis()
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setVisible(latest > 400)
    setScrollingDown(latest > previous)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: scrollingDown ? 0.4 : 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          whileHover={{ opacity: 1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
          onClick={() => {
            sound.swoosh()
            if (lenis) lenis.scrollTo(0)
            else window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="fixed right-4 bottom-4 z-40 flex size-10 cursor-pointer items-center justify-center rounded-full border border-line bg-background/80 text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:text-foreground md:right-6 md:bottom-6"
        >
          <ArrowUpIcon className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
