"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <div className="w-9 h-9 rounded-full bg-white/10 animate-pulse" aria-hidden />
  )

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        relative w-9 h-9 rounded-full flex items-center justify-center
        transition-all duration-300 focus-ring
        border border-white/10 hover:border-accent/50
        hover:bg-accent/10 hover:scale-110
      `}
    >
      {isDark ? (
        <Sun size={16} className="text-accent" />
      ) : (
        <Moon size={16} className="text-violet" />
      )}
    </button>
  )
}
