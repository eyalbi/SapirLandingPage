import Hero from './sections/Hero.jsx'
import IconRow from './sections/IconRow.jsx'
import SaveCta from './sections/SaveCta.jsx'
import About from './sections/About.jsx'
import QrFloat from './sections/QrFloat.jsx'
import StickyBar from './sections/StickyBar.jsx'
import { SITE } from './data.js'

export default function CardApp() {
  return (
    <div className="min-h-screen bg-ivory font-hebrew text-charcoal">
      <main className="pb-24 md:pb-12">
        <Hero />
        <IconRow />
        <SaveCta />
        <About />
        <footer className="py-8 text-center text-sm text-warm-gray">
          <a href={SITE} className="font-medium text-sage-dark transition-colors hover:text-sage">satyabysapir.com</a>
        </footer>
      </main>
      <QrFloat />
      <StickyBar />
    </div>
  )
}
