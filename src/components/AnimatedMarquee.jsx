import { useEffect, useRef } from 'react'

export default function AnimatedMarquee() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf
    const speed = 60 // px/sec

    const tick = (ts) => {
      if (!start) start = ts
      const dt = (ts - start) / 1000
      el.style.transform = `translateX(-${(dt * speed) % el.scrollWidth}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const items = ['Identity', 'Logos', 'Editorial', 'Campaigns', 'Motion', 'Packaging', 'Typography']

  return (
    <div className="relative py-8 bg-black text-white overflow-hidden select-none">
      {/* neon line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-amber-400 opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-amber-400 via-violet-400 to-emerald-400 opacity-60" />

      {/* marquee */}
      <div className="whitespace-nowrap will-change-transform flex" ref={ref}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 text-2xl font-black tracking-tight opacity-90">
            {t}
            <span className="mx-6 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-amber-400 align-middle" />
          </span>
        ))}
      </div>
    </div>
  )
}
