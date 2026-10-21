import { motion } from "motion/react"

import { Panel, PanelAnchorTitle, PanelHeader } from "@/components/layout/panel"
import { SKILLS, SKILLS_COUNT, type Skill } from "@/data"

const ID = "stack"

function SkillPill({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.li
      className="flex"
      initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
    >
      <span
        style={skill.color ? ({ "--skill-color": skill.color } as React.CSSProperties) : undefined}
        className="group flex h-(--badge-height) items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-all hover:scale-105 hover:bg-foreground hover:text-background hover:shadow-[0_0_0_1px_var(--skill-color,transparent),0_8px_18px_-6px_var(--skill-color,transparent)] dark:bg-zinc-900/80 dark:hover:bg-foreground [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80 hover:[&_svg]:text-background"
      >
        {skill.icon && (
          <skill.icon aria-hidden style={skill.color ? { color: skill.color } : undefined} />
        )}
        {skill.name}
      </span>
    </motion.li>
  )
}

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelAnchorTitle id={ID} sup={SKILLS_COUNT}>
          Stack
        </PanelAnchorTitle>
      </PanelHeader>

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(44)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-line max-sm:hidden"
        />

        {SKILLS.map((category, index) => {
          const categoryId = `${ID}-${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
          return (
            <motion.div
              key={category.name}
              className="group/row grid items-start gap-y-2 border-b border-line py-4 transition-colors last:border-none hover:bg-accent/30 sm:grid-cols-[var(--col-left-width)_1fr]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35 }}
            >
              <div
                id={categoryId}
                className="flex items-center gap-1.5 pl-4 text-sm/(--badge-height) text-muted-foreground transition-colors group-hover/row:text-foreground"
              >
                <span aria-hidden className="font-mono text-xs text-muted-foreground/60 select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <category.icon aria-hidden className="size-3.5 shrink-0 text-muted-foreground/70" />
                <span className="text-foreground">{category.name}</span>
              </div>

              <ul aria-labelledby={categoryId} className="flex flex-wrap gap-1.5 px-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Panel>
  )
}
