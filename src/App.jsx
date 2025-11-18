import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Contact />
        <footer id="about" className="py-12 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div>
                <h3 className="text-lg font-semibold">About</h3>
                <p className="mt-2 text-sm text-slate-700">Founded by designers with over a decade crafting for the Maldives’ most exclusive resorts. We combine strategic thinking with refined execution across print and digital.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Capabilities</h3>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Branding & logo systems</li>
                  <li>• Festive & seasonal campaigns</li>
                  <li>• Menus, brochures & sales kits</li>
                  <li>• Social & digital assets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="mt-2 text-sm text-slate-700">Based in Maldives • Working worldwide</p>
                <p className="text-sm text-slate-700">hello@flames.studio</p>
              </div>
            </div>
            <div className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} Flames Studio. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
