import DesignerHeader from './components/DesignerHeader'
import BigSlider from './components/BigSlider'
import Work from './components/Work'
import AnimatedServices from './components/AnimatedServices'
import AnimatedMarquee from './components/AnimatedMarquee'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DesignerHeader logo="FS" />
      <main>
        <BigSlider />
        <AnimatedMarquee />
        <Work />
        <AnimatedServices />
        <Contact />
        <footer id="about" className="py-12 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div>
                <h3 className="text-lg font-semibold">About</h3>
                <p className="mt-2 text-sm text-slate-700">An independent graphic design studio focused on identity, editorial, and campaign systems. We combine rigorous grids with expressive motion.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Capabilities</h3>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Brand identity & logo systems</li>
                  <li>• Campaign & content toolkits</li>
                  <li>• Editorial, menus & brochures</li>
                  <li>• Motion & digital assets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="mt-2 text-sm text-slate-700">Working worldwide</p>
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
