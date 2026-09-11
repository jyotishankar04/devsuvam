import { useCallback, useEffect, useRef, useState } from "react"
import { useLenis } from "lenis/react"
import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  CopyIcon,
  FileTextIcon,
  FolderKanbanIcon,
  HomeIcon,
  LaptopIcon,
  MonitorIcon,
  MoonIcon,
  NotebookPenIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
  type LucideIcon,
} from "lucide-react"
import { useHotkeys } from "react-hotkeys-hook"
import { useNavigate } from "react-router"
import { toast } from "sonner"

import { useTheme } from "@/components/theme-provider"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { NAV_LINKS, SOCIAL_LINKS, USER, sortedPosts, sortedProjects } from "@/data"
import { sound } from "@/lib/sound"
import { cn } from "@/lib/utils"

const PAGE_ICONS: Record<string, LucideIcon> = {
  "/": HomeIcon,
  "/projects": FolderKanbanIcon,
  "/blogs": NotebookPenIcon,
  "/about": UserIcon,
  "/experience": BriefcaseBusinessIcon,
  "/setup": LaptopIcon,
}

export function CommandMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const lenis = useLenis()
  const { setTheme } = useTheme()

  const setOpenWithSound = useCallback((next: boolean) => {
    if (next) sound.pop()
    setOpen(next)
  }, [])

  useHotkeys(
    "mod+k, slash",
    (e) => {
      e.preventDefault()
      setOpenWithSound(!open)
    },
    { enableOnFormTags: ["INPUT"] },
    [open, setOpenWithSound]
  )

  // Lenis keeps scrolling the page behind the dialog unless it is paused.
  // Only restart it on an actual close, so we never undo someone else's stop
  // (e.g. the welcome splash) on mount.
  const pausedScroll = useRef(false)
  useEffect(() => {
    if (!lenis) return
    if (open) {
      lenis.stop()
      pausedScroll.current = true
    } else if (pausedScroll.current) {
      lenis.start()
      pausedScroll.current = false
    }
  }, [open, lenis])

  const run = useCallback((action: () => void) => {
    setOpen(false)
    sound.click()
    action()
  }, [])

  const openExternal = (url: string) =>
    run(() => window.open(url, "_blank", "noopener,noreferrer"))

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenWithSound(true)}
        className={cn(
          "flex h-8 cursor-pointer items-center gap-2 rounded-full border border-line bg-muted/40 pr-1.5 pl-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          className
        )}
        aria-label="Open command menu"
      >
        <SearchIcon className="size-3.5" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden h-5 items-center gap-0.5 rounded-full border border-line bg-background px-1.5 font-mono text-[0.625rem] font-medium lg:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Command menu"
        description="Search pages, projects, posts and more"
        showCloseButton={false}
        className="sm:max-w-lg"
      >
        <CommandInput placeholder="Type a command or search…" />
        <CommandList data-lenis-prevent className="max-h-[min(24rem,60vh)]">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Pages">
            {NAV_LINKS.map((link) => {
              const Icon = PAGE_ICONS[link.path] ?? HomeIcon
              return (
                <CommandItem
                  key={link.path}
                  value={`page ${link.label}`}
                  onSelect={() => run(() => navigate(link.path))}
                >
                  <Icon />
                  {link.label}
                </CommandItem>
              )
            })}
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Projects">
            {sortedProjects().map((project) => (
              <CommandItem
                key={project.slug}
                value={`project ${project.title} ${project.tags.join(" ")}`}
                onSelect={() => run(() => navigate(`/projects/${project.slug}`))}
              >
                <FolderKanbanIcon />
                {project.title}
              </CommandItem>
            ))}
          </CommandGroup>

          {sortedPosts().length > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup heading="Blog">
                {sortedPosts().map((post) => (
                  <CommandItem
                    key={post.title}
                    value={`blog ${post.title} ${post.tags?.join(" ") ?? ""}`}
                    onSelect={() => openExternal(post.url)}
                  >
                    <FileTextIcon />
                    <span className="truncate">{post.title}</span>
                    <ArrowUpRightIcon className="ml-auto text-muted-foreground" />
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          <CommandSeparator />
          <CommandGroup heading="Social">
            {SOCIAL_LINKS.map((link) => (
              <CommandItem
                key={link.name}
                value={`social ${link.name}`}
                onSelect={() => openExternal(link.url)}
              >
                <link.icon />
                {link.name}
                <ArrowUpRightIcon className="ml-auto text-muted-foreground" />
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem
              value="copy email"
              onSelect={() =>
                run(() => {
                  navigator.clipboard.writeText(USER.email).then(
                    () => {
                      sound.success()
                      toast.success("Email copied to clipboard")
                    },
                    () => toast.error("Couldn't copy email")
                  )
                })
              }
            >
              <CopyIcon />
              Copy email
            </CommandItem>
            <CommandItem value="resume cv" onSelect={() => openExternal(USER.resumeUrl)}>
              <FileTextIcon />
              Open resume
              <ArrowUpRightIcon className="ml-auto text-muted-foreground" />
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem value="theme light" onSelect={() => run(() => setTheme("light"))}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem value="theme dark" onSelect={() => run(() => setTheme("dark"))}>
              <MoonIcon />
              Dark
              <CommandShortcut>D</CommandShortcut>
            </CommandItem>
            <CommandItem value="theme system" onSelect={() => run(() => setTheme("system"))}>
              <MonitorIcon />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
