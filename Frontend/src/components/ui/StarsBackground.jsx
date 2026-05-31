import { useEffect, useRef } from 'react'

const LAYERS = [
  { count: 300, rMin: 0.3, rMax: 1.1, baseMin: 0.4, baseMax: 0.7, speedMin: 0.003, speedMax: 0.011, glow: 0 },
  { count: 60,  rMin: 0.8, rMax: 2.0, baseMin: 0.6, baseMax: 0.9, speedMin: 0.005, speedMax: 0.015, glow: 5 },
  { count: 15,  rMin: 1.5, rMax: 3.0, baseMin: 0.8, baseMax: 1.0, speedMin: 0.003, speedMax: 0.009, glow: 14 },
]

function rand(min, max) {
  return Math.random() * (max - min) + min
}

function spawnStars(width, height) {
  const stars = []

  for (const layer of LAYERS) {
    for (let i = 0; i < layer.count; i++) {
      stars.push({
        x:     rand(0, width),
        y:     rand(0, height),
        r:     rand(layer.rMin, layer.rMax),
        base:  rand(layer.baseMin, layer.baseMax),
        phase: rand(0, Math.PI * 2),
        speed: rand(layer.speedMin, layer.speedMax),
        glow:  layer.glow,
      })
    }
  }

  return stars
}

export default function StarsBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      stars = spawnStars(canvas.width, canvas.height)
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const s of stars) {
        s.phase += s.speed
        const opacity = Math.min(1, s.base + Math.sin(s.phase) * 0.25)

        ctx.save()

        if (s.glow > 0) {
          ctx.shadowColor = 'rgba(180,210,255,1)'
          ctx.shadowBlur  = s.glow
        }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,235,255,${opacity})`
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    animId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0 }} />
}
