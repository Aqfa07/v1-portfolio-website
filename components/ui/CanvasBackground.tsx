"use client"

import { useEffect, useRef } from "react"

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number }>>([])
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 12000))
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.5,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]

        // Mouse connection
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (md < 160) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.35 * (1 - md / 160)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Particle connections
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 * (1 - d / 110)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 212, 255, 0.55)"
        ctx.fill()
      })

      animFrameRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onResize = () => { resize(); createParticles() }

    resize()
    createParticles()
    draw()

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
