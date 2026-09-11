import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useLenis } from "lenis/react"

import { USER } from "@/data"

// Shown once per browser session: a new visit sees it, in-app navigation and
// refreshes don't. Clear this key in DevTools → Application to see it again.
const SESSION_KEY = "welcome-shown"

const hasSeenWelcome = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1"
  } catch {
    return true
  }
}

const EASE = [0.65, 0, 0.35, 1] as const

/** Full-screen handwritten "Welcome" that plays on first load, then fades away. */
export function WelcomeSplash() {
  const [visible, setVisible] = useState(() => !hasSeenWelcome())
  const [fontReady, setFontReady] = useState(false)
  const reduceMotion = useReducedMotion()
  const lenis = useLenis()

  // Wait for Caveat so the word isn't written in a fallback font first.
  useEffect(() => {
    if (!visible) return
    let settled = false
    const ready = () => {
      if (settled) return
      settled = true
      setFontReady(true)
    }
    if (document.fonts) document.fonts.load('500 1em "Caveat"').then(ready, ready)
    else ready()
    const fallback = window.setTimeout(ready, 800)
    return () => window.clearTimeout(fallback)
  }, [visible])

  // Remember it for this session and schedule the fade-out.
  useEffect(() => {
    if (!visible || !fontReady) return
    try {
      sessionStorage.setItem(SESSION_KEY, "1")
    } catch {
      // ignore storage failures
    }
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 1200 : 2800)
    return () => window.clearTimeout(timer)
  }, [visible, fontReady, reduceMotion])

  // Any key skips it.
  useEffect(() => {
    if (!visible) return
    const skip = () => setVisible(false)
    window.addEventListener("keydown", skip)
    return () => window.removeEventListener("keydown", skip)
  }, [visible])

  // Keep the page from scrolling underneath while it's on screen.
  useEffect(() => {
    if (!visible) return
    const root = document.documentElement
    const previous = root.style.overflow
    root.style.overflow = "hidden"
    lenis?.stop()
    return () => {
      root.style.overflow = previous
      lenis?.start()
    }
  }, [visible, lenis])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome"
          aria-hidden
          data-lenis-prevent
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-100 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-background select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div aria-hidden className="diagonal-stripes absolute inset-0 mask-radial-from-0% mask-radial-to-60% opacity-50" />

          {fontReady && (
            <div className="relative flex flex-col items-center">
              {/* The clip-path sweeps left → right, so the word appears as if written. */}
              <motion.p
                className="px-4 font-handwritten text-7xl leading-none text-foreground sm:text-8xl md:text-9xl"
                initial={{ clipPath: "inset(-20% 100% -20% 0)", opacity: 0.6 }}
                animate={{ clipPath: "inset(-20% 0% -20% 0)", opacity: 1 }}
                transition={{ duration: reduceMotion ? 0.3 : 1.3, ease: EASE, delay: 0.15 }}
              >
                Welcome
              </motion.p>

              <svg
                viewBox="0 0 320 24"
                fill="none"
                className="-mt-1 h-5 w-56 text-muted-foreground sm:w-72"
                aria-hidden
              >
                <motion.path
                  d="M4 16C60 6 120 4 180 9C220 12 262 18 316 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: EASE, delay: reduceMotion ? 0.2 : 1.2 }}
                />
              </svg>

              <motion.p
                className="mt-3 font-handwritten text-2xl text-muted-foreground sm:text-3xl"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0.3 : 1.6 }}
              >
                — {USER.firstName}
              </motion.p>
            </div>
          )}

          <motion.span
            className="absolute bottom-6 font-mono text-[0.6875rem] tracking-wide text-muted-foreground/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            click or press any key to skip
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
