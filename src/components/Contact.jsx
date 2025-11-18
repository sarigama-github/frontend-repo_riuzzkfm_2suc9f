import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    resort_or_company: '',
    project_type: 'Branding',
    message: '',
    budget_range: '',
    timeline: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Failed to send')
      setSent(true)
      setForm({ name: '', email: '', phone: '', resort_or_company: '', project_type: 'Branding', message: '', budget_range: '', timeline: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Start a project</h2>
            <p className="mt-3 text-slate-700 max-w-xl">Tell us about your resort and goals. We’ll respond within one business day with next steps.</p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li>• Based in Maldives with 12+ years of luxury resort experience</li>
              <li>• Fast turnarounds for seasonal campaigns and menus</li>
              <li>• Print-ready and press-managed deliveries</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            {sent ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800">
                Thank you! Your inquiry is in. We’ll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Resort / Company</label>
                    <input name="resort_or_company" value={form.resort_or_company} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Project type</label>
                    <select name="project_type" value={form.project_type} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900">
                      <option>Branding</option>
                      <option>Logo Design</option>
                      <option>Menu Design</option>
                      <option>Brochure / Flyer</option>
                      <option>Seasonal / Festive</option>
                      <option>Website / Digital</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Timeline</label>
                    <input name="timeline" value={form.timeline} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Budget range</label>
                  <input name="budget_range" value={form.budget_range} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Project details</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows="5" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="Tell us about your resort, audience, scope, and goals" />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button disabled={loading} className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-700 transition disabled:opacity-50">
                  {loading ? 'Sending...' : 'Send inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
