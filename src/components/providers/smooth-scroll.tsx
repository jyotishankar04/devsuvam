import type { ReactNode } from "react"
import { ReactLenis } from "lenis/react"
import { useReducedMotion } from "motion/react"

// Header is 56px (h-14) + a little breathing room.
const ANCHOR_OFFSET = -72

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        anchors: { offset: ANCHOR_OFFSET },
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
