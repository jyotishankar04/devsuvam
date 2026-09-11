import { LayoutGridIcon, ListIcon } from "lucide-react";
import { motion } from "motion/react";

import type { ProjectLayout } from "@/components/custom/projects/ProjectCard";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";

interface ViewToggleProps {
  value: ProjectLayout;
  onChange: (value: ProjectLayout) => void;
  showLabels?: boolean;
}

const OPTIONS = [
  { value: "grid", label: "Grid", icon: LayoutGridIcon },
  { value: "list", label: "List", icon: ListIcon },
] as const;

export function ViewToggle({ value, onChange, showLabels = false }: ViewToggleProps) {
  return (
    <div className="inline-flex items-center rounded-lg border border-line bg-muted/40 p-0.5">
      {OPTIONS.map((option) => {
        const active = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              if (!active) sound.click();
              onChange(option.value);
            }}
            aria-pressed={active}
            aria-label={`${option.label} view`}
            className={cn(
              "relative flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2 text-xs transition-colors",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {active && (
              <motion.span
                layoutId="view-toggle-pill"
                className="absolute inset-0 rounded-md bg-background shadow-xs ring-1 ring-border"
                transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
              />
            )}
            <option.icon className="relative size-3.5" />
            {showLabels && <span className="relative">{option.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
