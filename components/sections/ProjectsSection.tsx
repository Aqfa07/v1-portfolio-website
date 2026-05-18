"use client"

import { useState, useRef, useEffect } from "react"
import { Github, ExternalLink } from "lucide-react"

type Project = {
  title: string
  problem: string
  description: string
  tech: string[]
  category: "Web" | "ML" | "Mobile" | "Backend" | "Academic"
  status: "Completed" | "In Progress" | "Open Source"
  github: string
  demo?: string | null
}

const PROJECTS: Project[] = [
  {
    title: "Tugas Akhir (Final Project)",
    problem: "Documenting comprehensive research findings in Informatics Engineering Education.",
    description:
      "Academic final project showcasing advanced concepts in Informatics Engineering Education with practical implementation, research methodology, and analysis components.",
    tech: ["Research", "Documentation", "Analysis", "LaTeX"],
    category: "Academic",
    status: "Completed",
    github: "https://github.com/Aqfa07/Tugas-Akhir.git",
    demo: null,
  },
  {
    title: "Simple Clock In/Out App",
    problem: "Businesses needed a lightweight, intuitive attendance tracking system.",
    description:
      "A streamlined employee attendance management system with real-time data processing, user-friendly interface for tracking check-ins and check-outs.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    status: "Completed",
    github: "https://github.com/Aqfa07/Simple-Clock-InOut-System.git",
    demo: "https://v0-simple-clock-in-out-app.vercel.app/",
  },
  {
    title: "Task Manager (React & Golang)",
    problem: "Teams needed a full-stack task management tool with efficient backend APIs.",
    description:
      "Full-stack task management application with React frontend and Golang backend, featuring real-time updates, REST API integration, and efficient task organization.",
    tech: ["React", "Golang", "REST API", "MySQL"],
    category: "Web",
    status: "Completed",
    github: "https://github.com/Aqfa07/golang-and-react-app.git",
    demo: "https://v0-golang-and-react-app.vercel.app/",
  },
  {
    title: "OpenMusic API v3",
    problem: "Music streaming apps require robust RESTful backends for song and playlist management.",
    description:
      "Comprehensive RESTful API backend for a music streaming application built with JavaScript/Node.js, featuring music data management, user authentication, and playlist functionality.",
    tech: ["JavaScript", "Node.js", "REST API", "PostgreSQL"],
    category: "Backend",
    status: "Open Source",
    github: "https://github.com/Aqfa07/dicoding-openmusic-v3-api.git",
    demo: null,
  },
]

const FILTERS = ["All", "Web", "ML", "Mobile", "Backend", "Academic"] as const
type Filter = typeof FILTERS[number]

const STATUS_CONFIG = {
  Completed:    { color: "bg-green-500/15 text-green-400 border-green-500/30", dot: "bg-green-400" },
  "In Progress": { color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30", dot: "bg-yellow-400" },
  "Open Source": { color: "bg-blue-500/15 text-blue-400 border-blue-500/30", dot: "bg-blue-400" },
}

function useScrollAnimation(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current.querySelectorAll(".animate-on-scroll, .animate-scale").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ref])
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All")
  const ref = useRef<HTMLDivElement>(null)
  useScrollAnimation(ref)

  const filtered = PROJECTS.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  )

  return (
    <section
      id="projects"
      className="py-24 bg-muted/20 relative z-20"
      ref={ref}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="section-title">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            A showcase of my work across different domains of technology and development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll delay-100">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`
                px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 focus-ring border
                ${activeFilter === f
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30 border-accent"
                  : "border-border text-muted-foreground bg-card hover:text-foreground hover:border-accent/40 hover:bg-accent/5"}
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project, i) => {
            const statusCfg = STATUS_CONFIG[project.status]
            return (
              <article
                key={project.title}
                className={`animate-scale delay-${(i + 1) * 100}
                  is-visible glass-card gradient-border rounded-2xl p-6
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10
                  transition-all duration-400 group flex flex-col`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-col gap-1 items-end shrink-0">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusCfg.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusCfg.dot}`} />
                      {project.status}
                    </span>
                    <span className="tech-pill tech-pill-violet text-xs">{project.category}</span>
                  </div>
                </div>

                {/* Problem statement */}
                <p className="text-xs text-accent/80 font-mono mb-2">
                  💡 {project.problem}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3 border-t border-white/8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium
                      border border-white/10 hover:border-accent/50 hover:text-accent hover:bg-accent/5
                      transition-all duration-300 focus-ring"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium
                        bg-accent/10 border border-accent/30 text-accent
                        hover:bg-accent hover:text-accent-foreground hover:scale-105
                        transition-all duration-300 focus-ring"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-on-scroll delay-400">
          <a
            href="https://github.com/Aqfa07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-medium
              border border-white/15 hover:border-accent/50 hover:bg-accent/10 hover:text-accent
              hover:scale-105 transition-all duration-300 focus-ring"
            aria-label="View all projects on GitHub"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
