import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center z-10 px-4 animate-fade-in-up">
        <p className="text-8xl md:text-9xl font-display font-bold gradient-text-cyan mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this page went on a debugging session and never came back.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold
            bg-accent text-accent-foreground
            hover:bg-accent/90 hover:scale-105 hover:shadow-lg hover:shadow-accent/30
            transition-all duration-300"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  )
}
