import { motion } from 'framer-motion'
import { Sparkles, Shapes, PenTool, Play } from 'lucide-react'

const blocks = [
  { icon: Shapes, title: 'Brand Identity', desc: 'Logos, typography, color systems, and guidelines.' },
  { icon: PenTool, title: 'Editorial & Print', desc: 'Menus, brochures, posters, and packaging.' },
  { icon: Sparkles, title: 'Campaign Systems', desc: 'Flexible kits for launches, seasons, and events.' },
  { icon: Play, title: 'Digital & Motion', desc: 'Motion-led assets, landing pages, and content.' },
]

export default function AnimatedServices() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-3xl bg-gradient-to-br from-fuchsia-400/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-400/20 to-amber-400/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Capabilities</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">Design that moves — identity, print, and motion systems with craft at the core.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-50 via-rose-50 to-amber-50" />
              <div className="relative flex items-start gap-4">
                <div className="p-2 rounded-xl bg-slate-900 text-white">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-tr from-fuchsia-400/30 to-amber-400/30 blur-2xl"
                animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
