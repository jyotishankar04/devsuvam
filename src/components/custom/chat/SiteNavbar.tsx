import ThemeToggle from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        {/* Left: Back + Brand */}
        <div className="flex items-center gap-3">
          {/* Back to root */}
          <Link
            to="/"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-foreground hover:bg-muted"
            aria-label="Back to home"
            title="Back"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>

          {/* Brand: SUVAM */}
          <Link to="/" className="flex items-baseline gap-1" aria-label="SUVAM Home">
            <span className="text-base font-semibold tracking-tight text-foreground">SUVAM</span>
            <span className="text-xs text-muted-foreground">chat</span>
          </Link>
        </div>

        {/* Right: Theme toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
