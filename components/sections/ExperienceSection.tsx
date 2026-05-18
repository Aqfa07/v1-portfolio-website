"use client"

import { useRef, useEffect } from "react"

const EXPERIENCES = [
  {
    title: "Teacher",
    company: "SMK Negeri 6 Padang",
    period: "Jan 2024 – Jun 2024",
    type: "Education",
    emoji: "🎓",
    description:
      "Taught Computer Network Administration and Telecommunications, focusing on Linux systems for hands-on network training.",
    bullets: [
      "Trained 30+ students in Linux network administration (Ubuntu, Debian, CentOS)",
      "Designed curriculum for DHCP/DNS server configuration and network troubleshooting",
      "Achieved 90%+ student competency pass rate in practical network assessments",
    ],
    tags: ["Linux", "Network Administration", "Teaching", "DHCP/DNS", "CentOS"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Machine Learning Cohort",
    company: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
    period: "Aug 2023 – Jan 2024",
    type: "Training Program",
    emoji: "🤖",
    description:
      "Completed a rigorous AI/ML program under Google-led consortium covering the full machine learning pipeline.",
    bullets: [
      "Completed 800+ hours of structured ML curriculum covering TensorFlow and deep learning",
      "Built and deployed an end-to-end ML model as part of a collaborative capstone project",
      "Earned TensorFlow Developer Certificate (2024–2027) as direct program outcome",
    ],
    tags: ["TensorFlow", "Python", "Machine Learning", "Deep Learning", "Data Processing"],
    color: "from-violet-400 to-purple-400",
  },
  {
    title: "Android Developer Intern",
    company: "PT. TRUVERSE GLOBAL KREATIF",
    period: "Sep 2023 – Nov 2023",
    type: "Internship",
    emoji: "📱",
    description:
      "Developed a production Android application for employee attendance management with real-time GPS and camera capabilities.",
    bullets: [
      "Built a full attendance app with GPS location tracking and camera-based clock-in verification",
      "Integrated Firebase Realtime Database for live attendance data syncing across devices",
      "Delivered UI designs and feature implementation within a 3-month internship timeline",
    ],
    tags: ["Android Studio", "Java", "Firebase", "GPS Integration", "UI Design"],
    color: "from-green-400 to-emerald-400",
  },
]

function useScrollAnimation(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current.querySelectorAll(".animate-on-scroll, .animate-from-left").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ref])
}

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollAnimation(ref)

  return (
    <section
      id="experience"
      className="py-24 relative z-20"
      ref={ref}
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="section-title">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Professional journey spanning education, AI/ML, and hands-on software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(180deg, #00d4ff, #7c3aed, transparent)" }}
            aria-hidden
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <article
                key={i}
                className={`animate-from-left delay-${(i + 1) * 100} relative pl-16 md:pl-20`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 md:left-5 top-6 w-6 h-6 rounded-full flex items-center justify-center
                    bg-gradient-to-br ${exp.color} shadow-lg`}
                  aria-hidden
                >
                  <span className="text-xs">{exp.emoji}</span>
                </div>

                {/* Card */}
                <div className="glass-card gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <p className={`font-semibold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="tech-pill text-xs">{exp.period}</span>
                      <span className="tech-pill tech-pill-violet text-xs">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{exp.description}</p>

                  {/* Bullet achievements */}
                  <ul className="space-y-2 mb-4" aria-label="Key achievements">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
