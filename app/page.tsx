import { CanvasBackground } from "@/components/ui/CanvasBackground"
import { ScrollProgress } from "@/components/ui/ScrollProgress"
import { BackToTop } from "@/components/ui/BackToTop"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Global UI */}
      <ScrollProgress />
      <CanvasBackground />
      <BackToTop />

      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-violet/5 rounded-full blur-3xl" />
      </div>

      {/* Layout */}
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
