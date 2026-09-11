import { motion } from "motion/react"

import { Panel, PanelAnchorTitle, PanelHeader } from "@/components/layout/panel"
import { SKILLS } from "@/data"

const ID = "stack"

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelAnchorTitle id={ID}>Stack</PanelAnchorTitle>
      </PanelHeader>

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(44)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-line max-sm:hidden"
        />

        {SKILLS.map((category, index) => {
          const categoryId = `${ID}-${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
          return (
            <div
              key={category.name}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              <div id={categoryId} className="pl-4 text-sm/(--badge-height)">
                <span aria-hidden className="mr-1.5 font-mono text-muted-foreground/80 select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category.name}
              </div>

              <ul aria-labelledby={categoryId} className="flex flex-wrap gap-1.5 px-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    className="flex"
                    initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: skillIndex * 0.03, duration: 0.3 }}
                  >
                    <span className="group flex h-(--badge-height) items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-foreground hover:text-background dark:bg-zinc-900/80 dark:hover:bg-foreground [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80 hover:[&_svg]:text-background">
                      {skill.icon && <skill.icon aria-hidden />}
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
