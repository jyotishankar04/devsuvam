"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {  Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

type FloatingChatButtonProps = {
  // left = bottom-left, right = bottom-right
  position?: "left" | "right"
  // Optional navigation; if provided, renders an anchor via Button asChild
  href?: string
  // Optional click handler if not using href
  onClick?: () => void
  // Accessible label; defaults to "Open chat"
  label?: string
  // Optional extra classes to override size or spacing
  className?: string
}

export function FloatingChatButton({
  position = "right",
  href,
  onClick,
  label = "Open chat",
  className,
}: FloatingChatButtonProps) {
  const sideClass = position === "left" ? "left-4 md:left-6" : "right-4 md:right-6"

  const baseClass = cn("fixed bottom-4 md:bottom-6 z-50", sideClass)

  const buttonClass = cn(
    // circular, subtle elevation, clear focus
    "h-12 w-12 rounded-full shadow-lg",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "transition-transform hover:scale-[1.03] active:scale-[0.98]",
    className,
  )

  // Render as link when href is present
  if (href) {
    return (
      <div className={baseClass}>
        <Button asChild aria-label={label} className={buttonClass} size="icon">
          <Link to={href}>
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">{label}</span>
          </Link>
        </Button>
      </div>
    )
  }

  // Otherwise render as a regular button
  return (
    <div className={baseClass}>
      <Button aria-label={label} className={buttonClass} size="icon" onClick={onClick} type="button">
        <Sparkles className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Button>
    </div>
  )
}
