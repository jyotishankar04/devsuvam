import { MoonIcon, SunIcon } from "lucide-react"
import { motion } from "motion/react"
import { useHotkeys } from "react-hotkeys-hook"

import { useTheme } from "@/components/theme-provider"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { IconSwap, IconSwapItem } from "@/components/ncdai/icon-swap"
import { buttonVariants } from "@/components/ui/button"
import { sound } from "@/lib/sound"
import { cn } from "@/lib/utils"

const TOGGLE_ID = "theme-toggle"

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // "D" toggles the theme, same as chanhdai.com. Clicking the button keeps the
  // view-transition origin on the toggle itself.
  useHotkeys("d", () => document.getElementById(TOGGLE_ID)?.click(), {
    preventDefault: true,
  })

  return (
    <AnimatedThemeToggler
      id={TOGGLE_ID}
      theme={resolvedTheme}
      onThemeChange={(next) => {
        sound.toggle(next === "light")
        setTheme(next)
      }}
      duration={550}
      title="Toggle theme (D)"
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-8 cursor-pointer overflow-hidden text-muted-foreground hover:text-foreground",
        className
      )}
    >
      <IconSwap>
        <IconSwapItem key={isDark ? "moon" : "sun"} as={motion.span}>
          {isDark ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
        </IconSwapItem>
      </IconSwap>
    </AnimatedThemeToggler>
  )
}
