import { useEffect, useRef } from 'react'

export default function AnimatedMarquee() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf
    const speed = 50 // px/sec

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
    <div className="py-8 bg-black text-white overflow-hidden select-none">
      <div className="whitespace-nowrap will-change-transform flex" ref={ref}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-6 text-xl font-semibold tracking-tight opacity-90">{t}</span>
        ))}
      </div>
    </div>
  )
}
