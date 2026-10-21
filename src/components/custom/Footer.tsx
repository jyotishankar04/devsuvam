import { ArrowUpRightIcon, CoffeeIcon } from "lucide-react";
import { Link } from "react-router";

import { NAV_LINKS, SOCIAL_LINKS, USER } from "@/data";
import { useLocalTime } from "@/hooks/use-local-time";
import { sound } from "@/lib/sound";

const buildDate = new Date(__BUILD_DATE__).toISOString().slice(0, 10);

const iconLinkClass =
  "flex size-8 items-center justify-center rounded-md border border-line text-muted-foreground transition-colors hover:bg-accent hover:text-foreground [&_svg]:size-4";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 font-mono text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
      {children}
    </p>
  );
}

/** Footer laid out as the title block of a technical drawing (after chanhdai.com). */
export default function Footer() {
  const time = useLocalTime(USER.timeZone);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="screen-line-top screen-line-bottom border-x border-line">
        <div className="stripe-divider h-12" />
      </div>

      <div className="border-x border-line">
        <div className="screen-line-bottom flex flex-wrap items-center gap-x-4 gap-y-3 px-4 py-4">
          <Link
            to="/"
            onClick={() => sound.click()}
            className="group mr-auto flex min-w-0 items-center gap-3"
          >
            <img
              src={USER.avatar}
              alt=""
              className="size-10 shrink-0 rounded-full border border-line object-cover transition-transform duration-300 group-hover:rotate-[-8deg]"
            />
            <span className="min-w-0">
              <span className="block truncate font-medium tracking-tight">{USER.displayName}</span>
              <span className="block truncate text-sm text-muted-foreground">{USER.title}</span>
            </span>
          </Link>

          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={iconLinkClass}
              >
                <link.icon />
              </a>
            ))}
            <a
              href={USER.buyMeACoffeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy me a coffee"
              className={iconLinkClass}
            >
              <CoffeeIcon />
            </a>
          </div>
        </div>

        <div className="grid gap-px bg-line sm:grid-cols-2">
          <nav aria-label="Footer" className="bg-background px-4 py-4">
            <SectionLabel>Pages</SectionLabel>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {NAV_LINKS.map((link, index) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => sound.click()}
                    className="group flex items-baseline gap-2 text-sm transition-colors hover:text-foreground"
                  >
                    <span aria-hidden className="font-mono text-xs text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="link">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-background px-4 py-4">
            <SectionLabel>Elsewhere</SectionLabel>
            <ul className="flex flex-col gap-1.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm"
                  >
                    <link.icon className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <span className="link">{link.name}</span>
                    <span className="min-w-0 truncate font-mono text-xs text-muted-foreground/70">
                      {link.handle}
                    </span>
                    <ArrowUpRightIcon className="ml-auto size-3.5 shrink-0 text-muted-foreground/0 transition-all group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div aria-hidden className="@container relative overflow-hidden border-t border-line select-none">
          <p className="translate-y-[22%] bg-gradient-to-b from-foreground/15 to-foreground/0 bg-clip-text text-center text-[15cqw] leading-none font-semibold tracking-tighter whitespace-nowrap text-transparent">
            {USER.firstName}
          </p>
        </div>
      </div>

      <div className="screen-line-top screen-line-bottom flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-x border-line px-4 py-3 font-mono text-xs text-muted-foreground">
        <span>
          © {year} {USER.displayName}
        </span>
        <span className="flex flex-wrap items-center gap-x-2">
          <span>{USER.location}</span>
          <span aria-hidden className="text-muted-foreground/40">·</span>
          <time className="tabular-nums">{time} IST</time>
          <span aria-hidden className="text-muted-foreground/40">·</span>
          <span>
            build <time dateTime={buildDate}>{buildDate}</time>
          </span>
        </span>
      </div>

      <div className="h-8 border-x border-line" />
    </footer>
  );
}
