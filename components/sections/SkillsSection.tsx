"use client"

import { useRef, useEffect, useState } from "react"

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: "🌐",
    skills: [
      { name: "HTML & CSS", pct: 92 },
      { name: "JavaScript", pct: 88 },
      { name: "React / Next.js", pct: 85 },
      { name: "Tailwind CSS", pct: 90 },
    ],
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "PHP / Laravel", pct: 82 },
      { name: "Node.js", pct: 78 },
      { name: "REST APIs", pct: 85 },
      { name: "Database Design", pct: 83 },
    ],
    tags: ["PHP", "Laravel", "Node.js", "REST API", "MySQL", "Firebase"],
  },
  {
    category: "ML / AI",
    icon: "🤖",
    skills: [
      { name: "Machine Learning", pct: 85 },
      { name: "Deep Learning", pct: 78 },
      { name: "TensorFlow", pct: 82 },
      { name: "Data Processing", pct: 80 },
    ],
    tags: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: [
      { name: "Android (Java)", pct: 80 },
      { name: "Kotlin", pct: 70 },
      { name: "Firebase", pct: 82 },
      { name: "GPS & Camera", pct: 75 },
    ],
    tags: ["Android Studio", "Java", "Kotlin", "Firebase", "GPS"],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", pct: 88 },
      { name: "Linux Admin", pct: 82 },
      { name: "Network Admin", pct: 78 },
      { name: "Cloud Services", pct: 70 },
    ],
    tags: ["Git", "GitHub", "Linux", "Ubuntu", "DHCP/DNS", "Vercel"],
  },
]

function SkillBar({ name, pct, visible }: { name: string; pct: number; visible: boolean }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(pct), 150)
      return () => clearTimeout(t)
    }
  }, [visible, pct])

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-accent font-mono">{visible ? `${pct}%` : "0%"}</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-bar"
          style={{ width: `${width}%`, transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)" }}
          role="progressbar"
          aria-valuenow={width}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name}: ${pct}%`}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeGroup, setActiveGroup] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // scroll animate items
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.1 }
    )
    section.querySelectorAll(".animate-on-scroll, .animate-from-left, .animate-scale").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const group = SKILL_GROUPS[activeGroup]

  return (
    <section
      id="skills"
      className="py-24 bg-muted/20 relative z-20"
      ref={sectionRef}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="section-title">Skills &amp; Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            A comprehensive skill set spanning multiple domains of technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll delay-100">
          {SKILL_GROUPS.map(({ category, icon }, i) => (
            <button
              key={category}
              onClick={() => setActiveGroup(i)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border
                transition-all duration-300 focus-ring
                ${activeGroup === i
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30 border-accent"
                  : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5"}
              `}
            >
              <span>{icon}</span>
              {category}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Progress Bars */}
          <div className="animate-from-left glass-card rounded-2xl p-8 space-y-6">
            <h3 className="font-display font-semibold text-lg flex items-center gap-2">
              <span>{group.icon}</span> {group.category}
            </h3>
            {group.skills.map(({ name, pct }) => (
              <SkillBar key={name} name={name} pct={pct} visible={visible} />
            ))}
          </div>

          {/* Tech Tags */}
          <div className="animate-from-right glass-card rounded-2xl p-8">
            <h3 className="font-display font-semibold text-lg mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span key={tag} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>

            {/* All skills quick overview */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">All Areas at a Glance</h4>
              <div className="grid grid-cols-5 gap-3">
                {SKILL_GROUPS.map(({ category, icon: grpIcon, skills: s }) => {
                  const avg = Math.round(s.reduce((a, b) => a + b.pct, 0) / s.length)
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveGroup(SKILL_GROUPS.findIndex((g) => g.category === category))}
                      className="text-center group focus-ring rounded-xl p-2"
                      title={`${category}: avg ${avg}%`}
                    >
                      <div className="text-2xl mb-1">{grpIcon}</div>
                      <p className="text-xs text-muted-foreground group-hover:text-accent transition-colors">{avg}%</p>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
