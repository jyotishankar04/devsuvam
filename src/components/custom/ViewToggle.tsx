import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

type DisplayMode = "stack" | "linear";

interface ViewToggleProps {
  value: DisplayMode;
  onChange: (mode: DisplayMode) => void;
  showLabels?: boolean;
}

export function ViewToggle({ value, onChange, showLabels = false }: ViewToggleProps) {
  const modes: DisplayMode[] = ["stack", "linear"];

  return (
    <div className="flex items-center rounded-xl bg-muted p-1">
      {modes.map((mode) => {
        const isActive = value === mode;
        return (
          <button
            key={mode}
            onClick={() => onChange(mode)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all",
              isActive
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-label={`${mode} view`}
          >
            {mode === "stack" ? <LayoutGrid size={16} /> : <List size={16} />}
            {showLabels && (
              <span className="hidden sm:inline capitalize">{mode}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
