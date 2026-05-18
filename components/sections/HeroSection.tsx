"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react"

const ROLES = [
  "Machine Learning Engineer",
  "Web Developer",
  "Mobile Developer",
  "Cloud Computing Enthusiast",
]

const STATS = [
  { value: "3+", label: "Projects Deployed" },
  { value: "2", label: "BNSP Certifications" },
  { value: "C1", label: "English Level" },
  { value: "1+", label: "Year Experience" },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function HeroSection() {
  const [nameTyped, setNameTyped] = useState("")
  const [roleTyped, setRoleTyped] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const fullName = "Aqil Afif"

  // Matrix-style name animation
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let idx = 0
    let iters = 0

    const animate = () => {
      if (idx < fullName.length) {
        if (iters < 8) {
          setNameTyped(fullName.slice(0, idx) + chars[Math.floor(Math.random() * chars.length)])
          iters++
        } else {
          setNameTyped(fullName.slice(0, idx + 1))
          idx++
          iters = 0
        }
      }
    }

    const timer = setInterval(animate, 60)
    const cleanup = setTimeout(() => { clearInterval(timer); setNameTyped(fullName) }, fullName.length * 600 + 1000)
    return () => { clearInterval(timer); clearTimeout(cleanup) }
  }, [])

  // Role cycling
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const speed = isDeleting ? 45 : 95

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (roleTyped.length < currentRole.length) {
          setRoleTyped(currentRole.slice(0, roleTyped.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (roleTyped.length > 0) {
          setRoleTyped(roleTyped.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [roleTyped, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 z-20"
      aria-label="Hero section"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-8">
            {/* Open to Work badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 animate-fade-in-up"
              role="status"
              aria-label="Availability status: Open to work"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-green-400 font-medium">Open to Work</span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-display font-bold animate-fade-in-up animate-delay-100">
                Hi, I&apos;m{" "}
                <span className="gradient-text-animate font-mono">
                  {nameTyped}
                  <span className="animate-blink text-accent">|</span>
                </span>
              </h1>

              <div className="text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in-up animate-delay-200 min-h-[2rem]">
                <span className="text-accent font-mono">
                  {roleTyped}
                  <span className="animate-blink">|</span>
                </span>
              </div>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up animate-delay-300">
                Fresh graduate in Informatics Engineering Education from{" "}
                <span className="text-foreground font-medium">Universitas Negeri Padang</span>.
                Passionate about creating innovative AI solutions and full-stack applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-400">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-xl font-medium bg-accent text-accent-foreground
                  hover:bg-accent/90 hover:scale-105 hover:shadow-lg hover:shadow-accent/30
                  transition-all duration-300 focus-ring"
              >
                View My Work
              </button>
              <a
                href="https://www.linkedin.com/in/aqilafif"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-medium flex items-center gap-2
                  border border-white/15 hover:border-accent/50 hover:bg-accent/10
                  hover:scale-105 transition-all duration-300 focus-ring"
                aria-label="Download CV (opens LinkedIn)"
              >
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-xl font-medium
                  border border-white/15 hover:border-violet/50 hover:bg-violet/10
                  hover:scale-105 transition-all duration-300 focus-ring"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up animate-delay-500">
              {[
                { href: "https://github.com/Aqfa07", icon: Github, label: "GitHub profile" },
                { href: "https://www.linkedin.com/in/aqilafif", icon: Linkedin, label: "LinkedIn profile" },
                { href: "mailto:aqfasmanju7@gmail.com", icon: Mail, label: "Send email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full
                    border border-white/10 text-muted-foreground
                    hover:border-accent/50 hover:text-accent hover:bg-accent/10
                    hover:scale-110 transition-all duration-300 focus-ring"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-white/8 animate-fade-in-up animate-delay-600">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-display font-bold gradient-text-cyan">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right animate-delay-200">
            <div className="relative">
              {/* Spinning gradient ring */}
              <div
                className="absolute -inset-3 rounded-full animate-spin-ring opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #00d4ff)",
                  borderRadius: "9999px",
                  padding: "2px",
                }}
                aria-hidden
              />
              <div className="absolute -inset-3 rounded-full bg-background" aria-hidden />

              {/* Glow rings */}
              <div
                className="absolute -inset-1 rounded-full animate-pulse-glow-cyan"
                aria-hidden
              />

              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/aqil-profile.jpg"
                  alt="Aqil Afif — Machine Learning & Web Developer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  width={320}
                  height={320}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap
                  px-5 py-2 rounded-full text-sm font-semibold
                  bg-accent text-accent-foreground shadow-lg shadow-accent/30 animate-float"
                aria-label="Status: Available for Work"
              >
                ✨ Available for Work
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo("about")}
            className="animate-bounce text-muted-foreground hover:text-accent transition-colors focus-ring rounded-full p-1"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
