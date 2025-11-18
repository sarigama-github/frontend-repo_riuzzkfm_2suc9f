import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Flames.Studio</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Hospitality</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((i) => (
            <a key={i.href} href={i.href} className="text-slate-700 hover:text-slate-900 transition-colors">
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
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="block text-slate-700 hover:text-slate-900">
                {i.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Start a project</a>
          </div>
        </div>
      )}
    </header>
  )
}
