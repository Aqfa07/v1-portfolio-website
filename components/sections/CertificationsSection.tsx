"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

// 8 featured badges — most prestigious & relevant for recruiters
const FEATURED_BADGES = [
  {
    id: "tf-dev-cert",
    name: "TensorFlow Developer Certificate",
    issuer: "TensorFlow / Google",
    imageUrl: "https://images.credly.com/images/ba7d317c-0441-493d-9297-840162892581/image.png",
    badgeUrl: "https://www.credly.com/badges/959e01af-ed05-42a8-9c42-b67c3fe42cda",
    highlight: true,
  },
  {
    id: "aws-restart",
    name: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    imageUrl: "https://images.credly.com/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png",
    badgeUrl: "https://www.credly.com/badges/4f1e5ee6-e54c-47b5-93b5-491c97b49727",
    highlight: true,
  },
  {
    id: "vertex-ai",
    name: "Build & Deploy ML on Vertex AI",
    issuer: "Google Cloud",
    imageUrl: "https://images.credly.com/images/f4c342c9-af98-4352-b54a-a8a166ee8f68/image.png",
    badgeUrl: "https://www.credly.com/badges/83bf1d2d-46f6-4a94-ac7f-a68ad089bd54",
    highlight: false,
  },
  {
    id: "gemini-streamlit",
    name: "Develop GenAI Apps with Gemini & Streamlit",
    issuer: "Google Cloud",
    imageUrl: "https://images.credly.com/images/1dbef1bd-cdb0-40e1-bff4-8200448c3161/blob",
    badgeUrl: "https://www.credly.com/badges/cae10caf-9217-4315-9184-e664e502b45e",
    highlight: false,
  },
  {
    id: "apigee",
    name: "Develop and Secure APIs with Apigee X",
    issuer: "Google Cloud",
    imageUrl: "https://images.credly.com/images/d344fbbb-44df-4af6-b5c0-ae59588b9ebc/image.png",
    badgeUrl: "https://www.credly.com/badges/c489cc54-09d0-4619-91ea-863dd452ca85",
    highlight: false,
  },
  {
    id: "cicd",
    name: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud",
    imageUrl: "https://images.credly.com/images/0daf1b0e-28c3-4102-96cf-e9d5f9213cc3/image.png",
    badgeUrl: "https://www.credly.com/badges/6779a8a5-9439-4f5f-ac67-21e310b18516",
    highlight: false,
  },
  {
    id: "devops",
    name: "Implement DevOps Workflows in Google Cloud",
    issuer: "Google Cloud",
    imageUrl: "https://images.credly.com/images/7514501c-47e3-4766-a833-2f45eacdf615/image.png",
    badgeUrl: "https://www.credly.com/badges/4764c77f-e716-4fdd-aa4a-7953efa133c9",
    highlight: false,
  },
  {
    id: "security",
    name: "Implement Cloud Security Fundamentals",
    issuer: "Google Cloud",
    imageUrl: "https://images.credly.com/images/f1dbea96-0ef4-4857-bb85-3d208a82de10/image.png",
    badgeUrl: "https://www.credly.com/badges/75df47aa-e135-4b14-8b6a-c0f9f2ae590f",
    highlight: false,
  },
]

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.08 }
    )
    section.querySelectorAll(".animate-on-scroll, .animate-scale").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="certifications"
      className="py-24 relative z-20"
      ref={sectionRef}
      aria-labelledby="certs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 id="certs-heading" className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="section-title">Certifications & Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Verified credentials from Google Cloud, AWS, TensorFlow & Cisco — earned through hands-on labs, assessments, and real-world projects.
          </p>
        </div>

        {/* 8 Featured Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-10">
          {FEATURED_BADGES.map((badge, i) => (
            <a
              key={badge.id}
              href={badge.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${badge.name} from ${badge.issuer} — verify on Credly`}
              className={`
                animate-scale delay-${(i % 4 + 1) * 100}
                glass-card rounded-2xl p-5 flex flex-col items-center text-center
                hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group
                ${badge.highlight
                  ? "border border-accent/30 hover:border-accent/60 hover:shadow-accent/20"
                  : "border border-white/5 hover:border-white/20"}
              `}
            >
              {badge.highlight && (
                <span className="mb-2 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                  ⭐ Featured
                </span>
              )}
              <div className="relative w-20 h-20 mb-3">
                <Image
                  src={badge.imageUrl}
                  alt={`${badge.name} badge`}
                  fill
                  className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <h3 className="text-xs font-semibold leading-snug mb-1 group-hover:text-accent transition-colors line-clamp-3">
                {badge.name}
              </h3>
              <p className="text-[10px] text-muted-foreground">{badge.issuer}</p>
            </a>
          ))}
        </div>

        {/* Stats + View All */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card rounded-2xl px-6 py-4 animate-on-scroll">
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { value: "93", label: "Total Verified Badges" },
              { value: "4", label: "Issuing Organizations" },
              { value: "2", label: "BNSP Certifications" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-display font-bold text-accent">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <a
            href="https://www.credly.com/users/aqil-afif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent/40 text-accent
                       hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm font-medium focus-ring whitespace-nowrap"
          >
            View all 93 badges on Credly ↗
          </a>
        </div>

      </div>
    </section>
  )
}
