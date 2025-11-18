export default function Services() {
  const services = [
    {
      title: 'Brand Identity',
      desc: 'Logo suites, typography, color systems, and complete brand guidelines tailored for resort operations.',
      items: ['Logo design', 'Visual systems', 'Brand books', 'Templates']
    },
    {
      title: 'Seasonal & Festive',
      desc: 'Christmas, New Year, Easter, Valentine — integrated campaign suites across print and digital.',
      items: ['Key visuals', 'Social assets', 'Posters & flyers', 'Activation kits']
    },
    {
      title: 'Menus & Collateral',
      desc: 'Premium menu systems and guest-facing materials designed for durability and elegance.',
      items: ['Restaurant menus', 'Wine lists', 'In-villa collateral', 'SPA menus']
    },
    {
      title: 'Sales & Marketing',
      desc: 'Brochures, fact sheets, presentation decks, and trade materials that convert.',
      items: ['Resort brochures', 'Event kits', 'Sales decks', 'Press assets']
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we do</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">Full-service creative for hospitality, with an eye for operational realities and guest experience.</p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700 list-disc list-inside">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
