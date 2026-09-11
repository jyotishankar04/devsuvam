import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { MenuIcon, Volume2Icon, VolumeXIcon, XIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

import ThemeToggle from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { IconSwap, IconSwapItem } from "@/components/ncdai/icon-swap";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SOCIAL_LINKS, USER } from "@/data";
import { setSoundMuted, sound, useSoundMuted } from "@/lib/sound";
import { cn } from "@/lib/utils";

const isActivePath = (pathname: string, path: string) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

function SoundToggle() {
  const muted = useSoundMuted();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8 cursor-pointer text-muted-foreground hover:text-foreground"
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
      title={muted ? "Unmute sounds" : "Mute sounds"}
      onClick={() => {
        setSoundMuted(!muted);
        if (muted) sound.toggle(true);
      }}
    >
      <IconSwap>
        <IconSwapItem key={muted ? "off" : "on"} as={motion.span}>
          {muted ? <VolumeXIcon className="size-4" /> : <Volume2Icon className="size-4" />}
        </IconSwapItem>
      </IconSwap>
    </Button>
  );
}

function DesktopNav() {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);
  const highlighted =
    hovered ?? NAV_LINKS.find((link) => isActivePath(pathname, link.path))?.path ?? null;

  return (
    <nav className="hidden items-center md:flex" onMouseLeave={() => setHovered(null)}>
      {NAV_LINKS.map((link) => {
        const active = isActivePath(pathname, link.path);
        return (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => sound.click()}
            onMouseEnter={() => setHovered(link.path)}
            className={cn(
              "relative px-2.5 py-1.5 text-sm transition-colors",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {highlighted === link.path && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-1 rounded-md bg-accent"
                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              />
            )}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { pathname } = useLocation();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed top-0 right-0 z-50 flex h-dvh w-72 flex-col border-l border-line bg-background md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            data-lenis-prevent
          >
            <div className="flex h-14 items-center justify-between border-b border-line px-4">
              <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                Menu
              </span>
              <Button variant="ghost" size="icon" className="size-8" onClick={onClose} aria-label="Close menu">
                <XIcon />
              </Button>
            </div>

            <nav className="flex-1 divide-y divide-line border-b border-line">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.03 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      sound.click();
                      onClose();
                    }}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 text-base transition-colors hover:bg-accent/50",
                      isActivePath(pathname, link.path)
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-3 p-4">
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex size-9 items-center justify-center rounded-md border border-line text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <link.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-[border-color,box-shadow] duration-300 supports-backdrop-filter:bg-background/70",
          scrolled ? "border-line shadow-[0_1px_12px_-6px_rgb(0_0_0/0.12)]" : "border-transparent"
        )}
      >
        <div className="mx-auto max-w-3xl px-2 sm:px-0">
        <div className="flex h-14 items-center justify-between gap-2 border-x border-line px-3">
          <Link to="/" className="group flex items-center gap-2.5" onClick={() => sound.click()}>
            <img
              src={USER.avatar}
              alt=""
              className="size-8 rounded-full border border-line object-cover transition-transform duration-300 group-hover:rotate-[-8deg]"
            />
            <span className="font-medium tracking-tight">{USER.firstName}</span>
          </Link>

          <DesktopNav />

          <div className="flex items-center gap-1">
            <CommandMenu />
            <SoundToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="size-8 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default NavBar;
