import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function DesignerHeader({ logo = 'F' }) {
  const [open, setOpen] = useState(false)
  const items = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 my-3 rounded-2xl border border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-3">
            {/* Square logo container */}
            <div className="w-9 h-9 rounded-md bg-slate-900 text-white grid place-items-center font-black text-lg tracking-tight">{logo}</div>
            <span className="sr-only">Home</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="text-slate-800 hover:text-slate-950 transition-colors font-medium">
                {i.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-700 transition">Start a project</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 bg-white rounded-b-2xl">
            <div className="px-4 py-4 space-y-3">
              {items.map((i) => (
                <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="block text-slate-800 hover:text-slate-950">
                  {i.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Start a project</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
