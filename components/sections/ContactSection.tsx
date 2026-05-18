"use client"

import { useRef, useEffect, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Clock, Briefcase } from "lucide-react"

function useScrollAnimation(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current.querySelectorAll(".animate-on-scroll, .animate-from-left, .animate-from-right").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ref])
}

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollAnimation(ref)

  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto link
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)
    window.location.href = `mailto:aqfasmanju7@gmail.com?subject=${encodeURIComponent(formState.subject || "Portfolio Contact")}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      className="py-24 relative z-20"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="section-title">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Ready to collaborate on exciting projects or discuss opportunities. Let&apos;s connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left: Info */}
          <div className="space-y-6 animate-from-left">
            {/* Availability */}
            <div className="glass-card rounded-2xl p-6 border border-green-500/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Availability Status</p>
                  <p className="text-xs text-green-400">Currently available for freelance &amp; full-time</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} className="text-accent" />
                <span>Usually replies within <strong className="text-foreground">24 hours</strong></span>
              </div>
            </div>

            {/* Contact details */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-semibold text-lg">Contact Information</h3>
              {[
                { icon: Mail, label: "Email", value: "aqfasmanju7@gmail.com", href: "mailto:aqfasmanju7@gmail.com" },
                { icon: Phone, label: "Phone", value: "+62 812-6147-9569", href: "tel:+6281261479569" },
                { icon: MapPin, label: "Location", value: "Kota Padang, Sumatera Barat, Indonesia", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:text-accent transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/Aqfa07", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/aqilafif", icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${label} profile`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                      glass-card border-white/10 hover:border-accent/50 hover:text-accent hover:bg-accent/10
                      hover:scale-105 transition-all duration-300 focus-ring"
                  >
                    <Icon size={17} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-from-right">
            <div className="glass-card gradient-border rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl mb-1">Send a Message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                I&apos;d love to hear about your project or opportunity.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <p className="font-semibold text-accent">Opening your email client...</p>
                  <p className="text-sm text-muted-foreground mt-2">Your message is ready to send!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-input border border-white/10
                          placeholder:text-muted-foreground text-foreground
                          focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                          transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-input border border-white/10
                          placeholder:text-muted-foreground text-foreground
                          focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                          transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium mb-1.5">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Project collaboration"
                      value={formState.subject}
                      onChange={(e) => setFormState((p) => ({ ...p, subject: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-input border border-white/10
                        placeholder:text-muted-foreground text-foreground
                        focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                        transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-input border border-white/10
                        placeholder:text-muted-foreground text-foreground resize-none
                        focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                        transition-all duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold
                      bg-accent text-accent-foreground
                      hover:bg-accent/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30
                      transition-all duration-300 focus-ring"
                  >
                    <Send size={17} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
