import Hero from './sections/Hero.jsx'
import Actions from './sections/Actions.jsx'
import About from './sections/About.jsx'
import Satya from './sections/Satya.jsx'
import Links from './sections/Links.jsx'
import QrShare from './sections/QrShare.jsx'
import StickyBar from './sections/StickyBar.jsx'

export default function CardApp() {
  return (
    <div className="min-h-screen bg-ivory font-hebrew text-charcoal">
      <main className="mx-auto w-full max-w-md px-4 pb-24 pt-6 md:pb-10">
        <div className="rounded-[22px] border-[1.5px] border-sage-light bg-warm-card px-5 py-6 shadow-[0_8px_28px_rgba(45,41,38,0.06)] outline outline-1 outline-offset-[5px] outline-sage-light">
          <Hero />
          <Actions />
          <About />
          <Satya />
          <Links />
          <QrShare />
        </div>
      </main>
      <StickyBar />
    </div>
  )
}
