import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

type Theme = "dark" | "light" | "system"
type ResolvedTheme = "dark" | "light"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    resolvedTheme: ResolvedTheme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "dark",
    resolvedTheme: "dark",
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const DARK_QUERY = "(prefers-color-scheme: dark)"

const getSystemTheme = (): ResolvedTheme =>
    window.matchMedia(DARK_QUERY).matches ? "dark" : "light"

// Applied synchronously so the View Transitions API snapshots the new theme
// inside `startViewTransition` (see src/components/theme-toggle.tsx).
function applyTheme(resolved: ResolvedTheme) {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolved)
    root.style.colorScheme = resolved
}

export function ThemeProvider({
    children,
    defaultTheme = "dark",
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )
    const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)

    const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme

    useEffect(() => {
        const media = window.matchMedia(DARK_QUERY)
        const onChange = () => setSystemTheme(media.matches ? "dark" : "light")
        media.addEventListener("change", onChange)
        return () => media.removeEventListener("change", onChange)
    }, [])

    useEffect(() => {
        applyTheme(resolvedTheme)
    }, [resolvedTheme])

    const setTheme = useCallback(
        (next: Theme) => {
            localStorage.setItem(storageKey, next)
            applyTheme(next === "system" ? getSystemTheme() : next)
            setThemeState(next)
        },
        [storageKey]
    )

    const value = useMemo(
        () => ({ theme, resolvedTheme, setTheme }),
        [theme, resolvedTheme, setTheme]
    )

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
