import { ArrowLeftIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

import { LetterCascade } from "@/components/componentry/letter-cascade";
import { MonoLabel, Panel } from "@/components/layout/panel";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <Panel className="screen-line-top-none">
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center gap-5 overflow-hidden px-4 py-20 text-center">
        <div aria-hidden className="diagonal-stripes absolute inset-0 mask-radial-from-10% mask-radial-to-70% opacity-70" />

        <MonoLabel className="relative">Error — page not found</MonoLabel>

        <LetterCascade
          text="404"
          className="relative font-mono text-8xl font-medium tracking-tighter sm:text-9xl"
          staggerFrom="center"
        />
        <p className="relative -mt-2 font-handwritten text-xl text-muted-foreground">
          hover the numbers ↑
        </p>

        <p className="relative max-w-sm text-balance text-muted-foreground">
          Nothing lives at <code className="rounded border border-line bg-muted/50 px-1 py-px font-mono text-sm">{pathname}</code>.
          Try the search — press{" "}
          <kbd className="rounded border border-line bg-muted/50 px-1 font-mono text-xs">⌘K</kbd>.
        </p>

        <Button variant="outline" size="sm" asChild className="relative">
          <Link to="/">
            <ArrowLeftIcon /> Back home
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
