"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { type Theme, themes, defaultTheme } from "@/lib/theme-config"

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem("kohinoor-theme")
    if (savedThemeId) {
      const savedTheme = themes.find((theme) => theme.id === savedThemeId)
      if (savedTheme) {
        setCurrentTheme(savedTheme)
      }
    }
  }, [])

  // Apply theme colors to CSS variables
  useEffect(() => {
    const root = document.documentElement
    const colors = currentTheme.colors

    // Apply CSS custom properties
    root.style.setProperty("--color-primary", colors.primary)
    root.style.setProperty("--color-secondary", colors.secondary)
    root.style.setProperty("--color-accent", colors.accent)
    root.style.setProperty("--color-background", colors.background)
    root.style.setProperty("--color-text", colors.text)
    root.style.setProperty("--color-muted", colors.muted)
    root.style.setProperty("--color-border", colors.border)
    root.style.setProperty("--color-card", colors.card)
    root.style.setProperty("--color-card-foreground", colors.cardForeground)
    root.style.setProperty("--color-popover", colors.popover)
    root.style.setProperty("--color-popover-foreground", colors.popoverForeground)
    root.style.setProperty("--color-destructive", colors.destructive)
    root.style.setProperty("--color-destructive-foreground", colors.destructiveForeground)
    root.style.setProperty("--color-ring", colors.ring)

    // Apply theme-specific classes to body
    document.body.className = `theme-${currentTheme.id}`
  }, [currentTheme])

  const setTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId)
    if (theme) {
      setCurrentTheme(theme)
      localStorage.setItem("kohinoor-theme", themeId)
    }
  }

  return <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
