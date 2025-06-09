"use client"

import { Check, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/contexts/theme-context"

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, themes } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className="flex items-start gap-3 p-3 cursor-pointer"
          >
            <div className="flex items-center gap-2 flex-1">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: theme.colors.primary }} />
                <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: theme.colors.secondary }} />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{theme.name}</div>
                <div className="text-xs text-muted-foreground">{theme.description}</div>
              </div>
              {currentTheme.id === theme.id && <Check className="h-4 w-4 text-primary" />}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
