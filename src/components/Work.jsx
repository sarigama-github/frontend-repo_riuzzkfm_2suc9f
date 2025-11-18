export default function Work() {
  const projects = [
    {
      title: 'Festive Season 2024 — Private Island',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
      tags: ['Festive', 'Key Visual', 'Print Suite']
    },
    {
      title: 'Signature Restaurant — Menu System',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
      tags: ['Menu', 'Print', 'Branding']
    },
    {
      title: 'Valentine at Sea — Romance Campaign',
      image: 'https://images.unsplash.com/photo-1685199212816-2d0474a7f9c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWYWxlbnRpbmUlMjBhdCUyMFNlYSUyMCVFMiU4MCU5NHxlbnwwfDB8fHwxNzYzNDU1MTQ3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      tags: ['Valentine', 'Campaign', 'Digital']
    },
  ]

  return (
    <section id="work" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Selected work</h2>
            <p className="mt-3 text-slate-700">A glimpse into seasonal suites, menus, and brand systems crafted for luxury resorts.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Request portfolio</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <figure key={p.title} className="group rounded-2xl overflow-hidden bg-white shadow ring-1 ring-slate-900/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <figcaption className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
