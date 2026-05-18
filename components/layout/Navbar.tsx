"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ["hero", "about", "skills", "projects", "experience", "certifications", "contact"]
      const scrollPos = window.scrollY + 100

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="font-display font-bold text-xl gradient-text-cyan focus-ring rounded"
            aria-label="Go to hero section"
          >
            Aqil Afif
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const id = item.toLowerCase()
              const isActive = activeSection === id
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    transition-all duration-300 focus-ring
                    ${isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </button>
              )
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors focus-ring"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/5 animate-fade-in-up">
            {NAV_LINKS.map((item) => {
              const id = item.toLowerCase()
              return (
                <button
                  key={item}
                  onClick={() => { scrollTo(id); setMenuOpen(false) }}
                  className={`
                    block w-full text-left px-4 py-3 text-sm font-medium rounded-lg
                    transition-colors duration-200 focus-ring
                    ${activeSection === id
                      ? "text-accent bg-accent/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"}
                  `}
                >
                  {item}
                </button>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}
