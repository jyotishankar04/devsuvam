"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()


  return (
    <Button
      variant="outline"
      size="icon"
      onClick={()=>{
        setTheme(theme === "dark" ? "light" : "dark")
      }}
      className="text-foreground cursor-pointer"
    >
      {theme === "dark" ? (
        <Moon  aria-hidden="true" />
      ) : (
        <Sun  aria-hidden="true" />
      )}
    </Button>
  )
}
