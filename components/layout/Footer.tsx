import { Github, Linkedin, Mail, Heart } from "lucide-react"

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/Aqfa07",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aqilafif",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:aqfasmanju7@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="relative z-20 pt-1">
      {/* Animated gradient line */}
      <div className="h-px animate-footer-gradient" aria-hidden />

      <div className="bg-card/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Brand */}
            <p className="font-display font-bold text-lg gradient-text-cyan">
              Aqil Afif
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`
                    w-9 h-9 flex items-center justify-center rounded-full
                    border border-white/10 text-muted-foreground
                    hover:border-accent/50 hover:text-accent hover:bg-accent/10
                    hover:scale-110 transition-all duration-300 focus-ring
                  `}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              © {new Date().getFullYear()} Aqil Afif · Built with{" "}
              <Heart size={12} className="text-accent inline" aria-label="love" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
