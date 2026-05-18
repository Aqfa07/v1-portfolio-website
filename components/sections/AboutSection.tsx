"use client"

import { useRef, useEffect } from "react"
import { GraduationCap, MapPin, Award, Zap, Globe, Coffee, Lightbulb } from "lucide-react"

const DRIVES = [
  { icon: Zap, title: "Problem Solver", desc: "Turning complex challenges into elegant solutions through code." },
  { icon: Globe, title: "Global Mindset", desc: "C1 English speaker, ready to collaborate internationally." },
  { icon: Coffee, title: "Lifelong Learner", desc: "Always exploring new technologies and pushing boundaries." },
  { icon: Lightbulb, title: "Innovation First", desc: "Bridging education and cutting-edge technology." },
]

const CERTIFICATIONS = [
  { name: "TensorFlow Developer Certificate", issuer: "TensorFlow / Google", year: "2024–2027", emoji: "🤖" },
  { name: "Junior Web Programmer", issuer: "BNSP Indonesia", year: "2023–2027", emoji: "💻" },
  { name: "Junior Network Administrator", issuer: "BNSP Indonesia", year: "2022–2025", emoji: "🔌" },
  { name: "EF SET English Certificate (C1)", issuer: "EF SET", year: "2025", emoji: "🌐" },
]

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.12 }
    )
    const el = ref.current
    if (el) {
      el.querySelectorAll(".animate-on-scroll, .animate-from-left, .animate-from-right, .animate-scale").forEach((node) => observer.observe(node))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

export function AboutSection() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 relative z-20" ref={ref} aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="about-heading" className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="section-title">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            A passionate technologist bridging education, AI, and software development.
          </p>
        </div>

        {/* Storytelling — 3 paragraphs */}
        <div className="animate-on-scroll delay-100 mb-16">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto border border-accent/10 space-y-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My interest in Machine Learning started seriously during my thesis, where I built a{" "}
              <span className="text-foreground font-medium">CNN model for plant disease classification</span>{" "}
              — and the moment it achieved high accuracy on real leaf images, I knew this was the field I wanted to pursue.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Since then, I earned the{" "}
              <span className="text-accent font-semibold">TensorFlow Developer Certificate</span>, completed the{" "}
              <span className="text-accent font-semibold">AWS re/Start Graduate</span> program, and built deep Google Cloud expertise
              through <span className="text-foreground font-medium">93 hands-on labs</span>. My exchange experience at Universitas Negeri Yogyakarta
              also sharpened my ability to collaborate and adapt in new environments.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Now I&apos;m looking for a role as an <span className="text-foreground font-medium">ML Engineer or Full-Stack Developer</span> where I can
              contribute from day one. I&apos;m comfortable working in international teams{" "}
              <span className="text-accent font-semibold">(C1 English)</span> and enjoy building end-to-end systems — from model training to production APIs.
            </p>
          </div>
        </div>

        {/* Education + Location + Certifications cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Education */}
          <div className="animate-from-left delay-100 glass-card gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-sm">Bachelor of Engineering</p>
                <p className="text-sm text-accent">Informatics Engineering Education</p>
                <p className="text-xs text-muted-foreground">Universitas Negeri Padang · 2020–2025</p>
              </div>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-sm">Exchange Program</p>
                <p className="text-xs text-muted-foreground">Universitas Negeri Yogyakarta · 2022–2023</p>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="animate-on-scroll delay-200 glass-card gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                <MapPin className="w-5 h-5 text-violet" style={{ color: "#a78bfa" }} />
              </div>
              <h3 className="font-display font-semibold text-lg">Location & Contact</h3>
            </div>
            <div className="space-y-3 text-sm">
              <a href="mailto:aqfasmanju7@gmail.com" className="block text-muted-foreground hover:text-accent transition-colors">
                📧 aqfasmanju7@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/aqilafif"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                🔗 linkedin.com/in/aqilafif
              </a>
              <a
                href="https://github.com/Aqfa07"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                🐙 github.com/Aqfa07
              </a>
            </div>
          </div>

          {/* Languages */}
          <div className="animate-from-right delay-100 glass-card gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <Award className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-display font-semibold text-lg">Languages</h3>
            </div>
            <div className="space-y-4">
              {[
                { lang: "Indonesian", level: "Native", pct: 100, color: "from-accent to-violet" },
                { lang: "English", level: "C1 Advanced", pct: 85, color: "from-green-400 to-emerald-500" },
              ].map(({ lang, level, pct, color }) => (
                <div key={lang}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{lang}</span>
                    <span className="text-muted-foreground">{level}</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${color}`}
                      style={{ width: `${pct}%` }}
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${lang} proficiency: ${pct}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Drives Me */}
        <div className="mb-16 animate-on-scroll delay-200">
          <h3 className="text-2xl font-display font-bold text-center mb-8">What Drives Me</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DRIVES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`animate-scale delay-${(i + 1) * 100} glass-card gradient-border rounded-xl p-5
                  hover:-translate-y-1 transition-all duration-300 group text-center`}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display font-semibold mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-on-scroll delay-300">
          <h3 className="text-2xl font-display font-bold text-center mb-8">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map(({ name, issuer, year, emoji }, i) => (
              <div
                key={name}
                className={`animate-scale delay-${(i + 1) * 100} glass-card gradient-border rounded-xl p-5
                  hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{issuer}</p>
                <span className="tech-pill text-xs">{year}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
