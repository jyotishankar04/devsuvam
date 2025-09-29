"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()


  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={()=>{
        setTheme(theme === "dark" ? "light" : "dark")
      }}
      className="text-foreground"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  )
}
