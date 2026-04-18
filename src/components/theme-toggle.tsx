import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun, Monitor } from "lucide-react"

const themeCycle: Record<string, "dark" | "light" | "system"> = {
  light: "dark",
  dark: "system",
  system: "light",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(themeCycle[theme]);
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="text-foreground cursor-pointer"
      title={`Theme: ${theme}`}
    >
      {theme === "dark" && <Moon aria-hidden="true" />}
      {theme === "light" && <Sun aria-hidden="true" />}
      {theme === "system" && <Monitor aria-hidden="true" />}
    </Button>
  )
}
