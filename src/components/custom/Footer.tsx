import type { ReactNode } from "react";
import { Link } from "react-router";

import { NAV_LINKS, SOCIAL_LINKS, USER } from "@/data";
import { useLocalTime } from "@/hooks/use-local-time";
import { cn } from "@/lib/utils";

const STACK = ["React 19 · Vite", "Tailwind CSS v4", "Motion · Lenis", "shadcn/ui"];

const INSPIRED_BY = ["chanhdai.com", "shadcn/ui", "Magic UI", "Componentry"];

const buildDate = new Date(__BUILD_DATE__).toISOString().slice(0, 10);

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1 bg-background px-4 py-3", className)}>
      <dt className="text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  );
}

/** Footer laid out as the title block of a technical drawing (after chanhdai.com). */
export default function Footer() {
  const time = useLocalTime(USER.timeZone);
  const year = new Date().getFullYear();
  const x = SOCIAL_LINKS.find((link) => link.name.startsWith("X"));

  return (
    <footer className="mt-auto">
      <div className="screen-line-top screen-line-bottom border-x border-line">
        <div className="stripe-divider h-12" />
      </div>

      <div className="border-x border-line">
        <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3">
          <span className="font-mono text-sm font-medium">{USER.displayName}</span>
          <span className="text-sm text-muted-foreground">{USER.title}</span>
        </div>

        <dl className="grid grid-cols-2 gap-px bg-line font-mono md:grid-cols-4">
          <Field label="Crafted by">
            {x ? (
              <a className="link-underline" href={x.url} target="_blank" rel="noopener noreferrer">
                {x.handle}
              </a>
            ) : (
              USER.firstName
            )}
          </Field>
          <Field label="Location">{USER.location}</Field>
          <Field label="Local time">
            <time className="tabular-nums">{time}</time>{" "}
            <span className="text-muted-foreground">IST</span>
          </Field>
          <Field label="Build">
            <time dateTime={buildDate}>{buildDate}</time>
          </Field>

          <Field label="Pages" className="col-span-1">
            <ul className="flex flex-col gap-0.5 font-sans">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link className="link" to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Field>
          <Field label="Elsewhere" className="col-span-1">
            <ul className="flex flex-col gap-0.5 font-sans">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a className="link" href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Field>
          <Field label="Stack" className="col-span-1">
            <ul className="flex flex-col gap-0.5">
              {STACK.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </Field>
          <Field label="Typeface" className="col-span-1">
            <ul className="flex flex-col gap-0.5">
              <li className="font-sans">Geist</li>
              <li>Geist Mono</li>
              <li className="font-handwritten text-base leading-tight">Caveat</li>
            </ul>
          </Field>

          <Field className="col-span-2 md:col-span-4" label="Inspired by">
            <ol className="-mx-4 grid grid-cols-2 gap-x-px gap-y-0.5 font-sans md:grid-cols-4">
              {INSPIRED_BY.map((name, index) => (
                <li className="flex gap-2 px-4" key={name}>
                  <span className="font-mono text-muted-foreground/80" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {name}
                </li>
              ))}
            </ol>
          </Field>
        </dl>
      </div>

      <div className="screen-line-top h-4 border-x border-line" />

      <div className="screen-line-top screen-line-bottom flex items-center gap-3 border-x border-line px-4 py-3 text-sm text-muted-foreground">
        <Link to="/" className="mr-auto flex items-center gap-2 transition-colors hover:text-foreground">
          <img src={USER.avatar} alt="" className="size-5 rounded-full border border-line" />
          <span>© {year} {USER.displayName}</span>
        </Link>
        {SOCIAL_LINKS.slice(0, 3).map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="transition-colors hover:text-foreground"
          >
            <link.icon className="size-4" />
          </a>
        ))}
      </div>

      <div className="h-8 border-x border-line" />
    </footer>
  );
}
