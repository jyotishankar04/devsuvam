import { cn } from "@/lib/utils"

/** Full-bleed diagonal-stripe band between panels (chanhdai.com style). */
export function StripeSeparator({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("stripe-divider h-8 w-full border-x border-line", className)}
    />
  )
}
