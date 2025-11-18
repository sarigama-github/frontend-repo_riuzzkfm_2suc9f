import { useEffect, useMemo, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const DURATION = 0.8
const AUTO_TIME = 4500

const slides = [
  {
    title: 'Design made to be felt',
    subtitle: 'Brand identity, campaign systems, and art direction for people who care about craft.',
    image: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=2000&auto=format&fit=crop',
    tint: 'from-fuchsia-500/30 via-purple-500/20 to-emerald-500/20',
  },
  {
    title: 'Logos with longevity',
    subtitle: 'Simple marks. Strong grids. Typography that breathes.',
    image: 'https://images.unsplash.com/photo-1604060206583-e95777e4a4c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMb2dvcyUyMHdpdGglMjBsb25nZXZpdHl8ZW58MHwwfHx8MTc2MzQ1NTU4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tint: 'from-amber-500/30 via-rose-500/20 to-cyan-500/20',
  },
  {
    title: 'Print that pops',
    subtitle: 'Menus, brochures, posters — ink-first thinking in a digital world.',
    image: 'https://images.unsplash.com/photo-1654847675045-e100ce156180?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcmludCUyMHRoYXQlMjBwb3BzfGVufDB8MHx8fDE3NjM0NTU1ODl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tint: 'from-indigo-500/30 via-sky-500/20 to-pink-500/20',
  },
  {
    title: 'Campaigns with motion',
    subtitle: 'Systems that scale across social, web, and experience.',
    image: 'https://images.unsplash.com/photo-1583301079894-08811815cae1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYW1wYWlnbnMlMjB3aXRoJTIwbW90aW9ufGVufDB8MHx8fDE3NjM0NTU1OTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tint: 'from-teal-500/30 via-violet-500/20 to-orange-500/20',
  },
]

export default function BigSlider() {
  const [index, setIndex] = useState(0)
  const safeSlides = useMemo(() => slides, [])
  const next = () => setIndex((i) => (i + 1) % safeSlides.length)
  const prev = () => setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length)

  // Auto advance
  useEffect(() => {
    const id = setInterval(next, AUTO_TIME)
    return () => clearInterval(id)
  }, [])

  // Cursor parallax
  const wrapRef = useRef(null)
  const handleMove = (e) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const intensity = 8
    const dx = x * intensity
    const dy = y * intensity
    wrapRef.current.style.setProperty('--dx', `${dx}px`)
    wrapRef.current.style.setProperty('--dy', `${dy}px`)
  }

  return (
    <section
      className="relative h-[92vh] min-h-[560px] w-full overflow-hidden"
      aria-roledescription="carousel"
      ref={wrapRef}
      onMouseMove={handleMove}
    >
      {/* Fine grid + grain */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#0000000f_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'url("data:image/svg+xml;utf8,\n  <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\n    <filter id=\'n\'>\n      <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\n      <feColorMatrix type=\'saturate\' values=\'0\'/>\n    </filter>\n    <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.9\'/>\n  </svg>\n")'}} />
      </div>

      {/* Morphing blobs (ambient) */}
      <motion.div
        className="absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-[40%] bg-gradient-to-br from-fuchsia-400/40 via-rose-400/30 to-amber-400/30 blur-3xl"
        animate={{
          borderRadius: ["40% 60% 60% 40% / 40% 40% 60% 60%", "60% 40% 40% 60% / 60% 60% 40% 40%"],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-[34rem] h-[34rem] rounded-[45%] bg-gradient-to-tr from-cyan-400/40 via-violet-400/30 to-emerald-400/30 blur-3xl"
        animate={{
          borderRadius: ["45% 55% 50% 50% / 40% 60% 40% 60%", "50% 50% 45% 55% / 60% 40% 60% 40%"],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {safeSlides.map((s, i) =>
            i === index ? (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: DURATION }}
              >
                <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.tint}`} />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                  <div className="text-white will-change-transform" style={{transform:`translate(calc(var(--dx, 0) * 1), calc(var(--dy, 0) * 1))`}}>
                    <motion.h1
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: DURATION }}
                      className="text-[10vw] sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                    >
                      {s.title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: DURATION }}
                      className="mt-6 max-w-2xl text-lg/7 sm:text-xl/8 text-white/85"
                    >
                      {s.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: DURATION }}
                      className="mt-10 flex flex-wrap gap-3"
                    >
                      <a href="#work" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">See work</a>
                      <a href="#contact" className="inline-flex items-center rounded-full border border-white/60 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Start a project</a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button aria-label="Previous" onClick={prev} className="p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition shadow">
          <ArrowLeft className="w-5 h-5" />
        </button>
        {/* Progress bars */}
        <div className="flex items-center gap-2">
          {safeSlides.map((_, i) => (
            <div key={i} className="h-1 w-14 rounded-full bg-white/40 overflow-hidden">
              {i === index && (
                <motion.div
                  key={`bar-${i}-${index}`}
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTO_TIME / 1000, ease: 'linear' }}
                />
              )}
            </div>
          ))}
        </div>
        <button aria-label="Next" onClick={next} className="p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition shadow">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
    </section>
  )
}
