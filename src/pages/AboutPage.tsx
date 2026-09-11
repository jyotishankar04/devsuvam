import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AwardIcon } from "lucide-react";

import { CallToAction } from "@/components/home/cta";
import { Education } from "@/components/home/education";
import { SocialLinks } from "@/components/home/social-links";
import {
  MonoLabel,
  Panel,
  PanelAnchorTitle,
  PanelHeader,
} from "@/components/layout/panel";
import { StripeSeparator } from "@/components/layout/separator";
import { AppleHelloEffectEnglish } from "@/components/ncdai/apple-hello-effect-english";
import { ABOUT, CERTIFICATIONS, USER } from "@/data";

function Hello() {
  const [done, setDone] = useState(false);

  return (
    <div className="relative flex h-44 items-center justify-center overflow-hidden sm:h-52">
      <div aria-hidden className="diagonal-stripes absolute inset-0 mask-radial-from-20% mask-radial-to-80% opacity-60" />
      <AppleHelloEffectEnglish className="relative h-16 sm:h-20" onAnimationComplete={() => setDone(true)} />
      <AnimatePresence>
        {done && (
          <motion.span
            className="absolute right-4 bottom-3 font-handwritten text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            — from Odisha, India
          </motion.span>
        )}
      </AnimatePresence>
      <span className="absolute bottom-3 left-4 font-mono text-xs text-muted-foreground/60">Fig. 1.</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Panel className="screen-line-top-none">
        <h1 className="sr-only">About {USER.displayName}</h1>
        <Hello />
      </Panel>

      <Panel>
        <div className="grid gap-px bg-line sm:grid-cols-[1fr_14rem]">
          <div className="space-y-4 bg-background p-4">
            <MonoLabel>About me</MonoLabel>
            <p className="text-xl font-medium tracking-tight text-balance">
              {USER.displayName} — {USER.title.toLowerCase()}.
            </p>
            {ABOUT.bio.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <ul className="flex flex-wrap gap-1.5 pt-1">
              {ABOUT.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-zinc-50/80 px-2 py-0.5 font-mono text-xs inset-ring-1 inset-ring-border dark:bg-zinc-900/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative bg-background p-2">
            <img
              src={ABOUT.photo}
              alt={USER.displayName}
              loading="lazy"
              className="aspect-4/5 w-full rounded-md object-cover object-[50%_30%] grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-full sm:aspect-auto"
            />
            <figcaption className="absolute right-4 bottom-4 rounded bg-background/80 px-1.5 py-0.5 font-mono text-[0.625rem] text-muted-foreground backdrop-blur">
              Fig. 2 — me
            </figcaption>
          </figure>
        </div>
      </Panel>

      <StripeSeparator />

      <Panel id="expertise">
        <PanelHeader>
          <PanelAnchorTitle id="expertise">Expertise</PanelAnchorTitle>
        </PanelHeader>
        <div className="grid gap-px bg-line sm:grid-cols-2">
          {ABOUT.strengths.map((item, index) => (
            <motion.div
              key={item.title}
              className="group flex gap-3 bg-background p-4 transition-colors hover:bg-accent/30"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-muted/40 text-muted-foreground transition-colors group-hover:text-foreground">
                <item.icon className="size-4.5" />
              </div>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Panel>

      <StripeSeparator />
      <Education />

      <StripeSeparator />
      <Panel id="certifications">
        <PanelHeader>
          <PanelAnchorTitle id="certifications">Certifications</PanelAnchorTitle>
        </PanelHeader>
        <ul className="divide-y divide-line">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.title} className="flex items-start gap-3 px-4 py-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-muted/40 text-muted-foreground">
                <AwardIcon className="size-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground tabular-nums">{cert.year}</span>
            </li>
          ))}
        </ul>
      </Panel>

      <StripeSeparator />
      <SocialLinks />

      <StripeSeparator />
      <CallToAction />
    </>
  );
}
