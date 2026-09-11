import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";

import { CallToAction } from "@/components/home/cta";
import {
  MonoLabel,
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/layout/panel";
import { StripeSeparator } from "@/components/layout/separator";
import { DAILY_DRIVER, SETUP, type SetupItem } from "@/data";
import { sound } from "@/lib/sound";

const itemCount = SETUP.reduce((sum, category) => sum + category.items.length, 0) + 1;

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function DailyDot() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-line px-1.5 py-px font-mono text-[0.625rem] text-muted-foreground uppercase">
      <span className="size-1.5 rounded-full bg-success" />
      Daily
    </span>
  );
}

/** Line drawing of a laptop, drawn in when it scrolls into view. */
function LaptopDrawing() {
  const draw = {
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true },
  };

  return (
    <svg viewBox="0 0 240 150" fill="none" className="w-full max-w-64 text-foreground" aria-hidden>
      <motion.rect
        x="40" y="14" width="160" height="100" rx="6"
        stroke="currentColor" strokeWidth="1.5"
        {...draw} transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.rect
        x="48" y="22" width="144" height="84" rx="2"
        stroke="currentColor" strokeOpacity="0.35" strokeWidth="1"
        {...draw} transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M20 124h200l-10 12H30z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
        {...draw} transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
      />
      <motion.path
        d="M104 124h32"
        stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"
        {...draw} transition={{ duration: 0.4, delay: 1.2 }}
      />
      {/* A tiny terminal on screen. */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="font-mono"
        fill="currentColor"
      >
        <text x="58" y="42" fontSize="9" fillOpacity="0.7">$ fastfetch</text>
        <text x="58" y="58" fontSize="8" fillOpacity="0.45">OS: Omarchy</text>
        <text x="58" y="70" fontSize="8" fillOpacity="0.45">WM: Hyprland</text>
        <text x="58" y="82" fontSize="8" fillOpacity="0.45">CPU: Ryzen AI 7</text>
        <rect x="58" y="90" width="6" height="9" fillOpacity="0.6" className="animate-pulse" />
      </motion.g>
    </svg>
  );
}

function DailyDriver() {
  return (
    <Panel id="daily-driver">
      <div className="grid gap-px bg-line sm:grid-cols-[1fr_1.15fr]">
        <figure className="relative flex items-center justify-center bg-background px-6 py-10">
          <div aria-hidden className="diagonal-stripes absolute inset-0 mask-radial-from-10% mask-radial-to-75% opacity-60" />
          <div className="relative w-full">
            <LaptopDrawing />
          </div>
          <figcaption className="absolute bottom-2 left-3 font-mono text-[0.625rem] text-muted-foreground/60">
            Fig. 1 — daily driver
          </figcaption>
        </figure>

        <div className="flex flex-col bg-background">
          <div className="border-b border-line p-4">
            <MonoLabel>{DAILY_DRIVER.role}</MonoLabel>
            <h2 className="mt-1 text-xl font-medium tracking-tight">{DAILY_DRIVER.name}</h2>
            <p className="text-sm text-muted-foreground">{DAILY_DRIVER.subtitle}</p>
          </div>
          <dl className="grid flex-1 grid-cols-2 gap-px bg-line font-mono">
            {DAILY_DRIVER.specs.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-0.5 bg-background px-4 py-3">
                <dt className="text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
                  {spec.label}
                </dt>
                <dd className="text-sm">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Panel>
  );
}

function SetupCell({ item, index }: { item: SetupItem; index: number }) {
  const content = (
    <>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-muted/40 text-muted-foreground transition-colors group-hover:bg-background group-hover:text-foreground [&_svg]:size-4.5">
        {item.icon ? <item.icon aria-hidden /> : <span className="font-mono text-xs">{item.name.slice(0, 2)}</span>}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="flex flex-wrap items-center gap-2 font-medium">
          {item.name}
          {item.badge && (
            <span className="rounded-full bg-foreground px-1.5 py-px font-mono text-[0.625rem] text-background uppercase">
              {item.badge}
            </span>
          )}
          {item.daily && <DailyDot />}
        </h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
        {item.specs && (
          <ul className="mt-2 flex flex-wrap gap-1">
            {item.specs.map((spec) => (
              <li
                key={spec}
                className="rounded-md border border-line bg-muted/40 px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
              >
                {spec}
              </li>
            ))}
          </ul>
        )}
      </div>
      {item.url && (
        <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      )}
    </>
  );

  const className = "group flex h-full items-start gap-3 bg-background p-4 transition-colors hover:bg-accent/30";

  return (
    <motion.li
      className="grid"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 4) * 0.05, duration: 0.35 }}
    >
      {item.url ? (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className={className} onClick={() => sound.click()}>
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </motion.li>
  );
}

export default function SetupPage() {
  return (
    <>
      <Panel className="screen-line-top-none">
        <PanelHeader className="pt-10">
          <MonoLabel>Gear & tools</MonoLabel>
          <PanelTitle asChild className="mt-2">
            <h1>
              Setup
              <PanelTitleSup>{itemCount}</PanelTitleSup>
            </h1>
          </PanelTitle>
          <PanelDescription className="pt-2">
            The hardware, software and tools I use every day — and what each one is for. Things
            marked <DailyDot /> are open pretty much all the time.
          </PanelDescription>
        </PanelHeader>

        <nav aria-label="Categories" className="no-scrollbar flex gap-1.5 overflow-x-auto px-4 py-3">
          {SETUP.map((category, index) => (
            <a
              key={category.title}
              href={`#${slug(category.title)}`}
              className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span className="text-muted-foreground/60">{String(index + 1).padStart(2, "0")}</span>{" "}
              {category.title}
            </a>
          ))}
        </nav>
      </Panel>

      <StripeSeparator />
      <DailyDriver />

      {SETUP.map((category, index) => {
        const id = slug(category.title);
        return (
          <div key={category.title}>
            <StripeSeparator />
            <Panel id={id}>
              <PanelHeader className="flex flex-wrap items-baseline justify-between gap-x-4 py-3">
                <PanelTitle className="text-2xl">
                  <a href={`#${id}`}>
                    <span aria-hidden className="mr-2 font-mono text-base text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {category.title}
                  </a>
                </PanelTitle>
                {category.description && (
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                )}
              </PanelHeader>

              <ul className="grid gap-px bg-line sm:grid-cols-2">
                {category.items.map((item, itemIndex) => (
                  <SetupCell key={item.name} item={item} index={itemIndex} />
                ))}
                {category.items.length % 2 === 1 && (
                  <li aria-hidden className="diagonal-stripes hidden bg-background sm:block" />
                )}
              </ul>
            </Panel>
          </div>
        );
      })}

      <StripeSeparator />
      <CallToAction
        title="Got a tool I should try?"
        description="I'm always tweaking this setup — send me your favourite app, CLI or keyboard shortcut."
      />
    </>
  );
}
