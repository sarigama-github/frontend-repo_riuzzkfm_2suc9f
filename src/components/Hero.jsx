import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-gradient-to-br from-amber-200 via-rose-100 to-sky-100 blur-3xl opacity-60" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200 via-indigo-100 to-emerald-100 blur-3xl opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900"
            >
              Graphic design for world-class hospitality brands
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-700"
            >
              We craft festive campaigns, menus, brochures, and complete branding systems for luxury resorts across the Maldives and beyond.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#work" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-700 transition">See our work</a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition">Start a project</a>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-slate-900">12+ yrs</p>
                <p className="text-sm text-slate-600">Maldives experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">200+</p>
                <p className="text-sm text-slate-600">Seasonal campaigns</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-sm text-slate-600">Resort partners</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-slate-900/10 shadow-2xl bg-white/40 backdrop-blur">
              <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop" alt="Maldives luxury resort" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/10 p-4">
              <p className="text-xs text-slate-600">Specialities</p>
              <ul className="mt-2 text-sm font-medium text-slate-900 space-y-1 list-disc list-inside">
                <li>Festive & Easter</li>
                <li>Valentine Campaigns</li>
                <li>Menus & Wine Lists</li>
                <li>Brochures & Flyers</li>
                <li>Branding & Logos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
