import { FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa'
import { about, identity, links } from '../data.js'

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="card-fade-up mt-12 border-t border-warm-border bg-warm-card px-4 py-12"
      style={{ animationDelay: '380ms' }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="about-heading" className="text-2xl font-bold text-charcoal">אודות</h2>
        <div className="mx-auto mt-2 h-1 w-40 rounded-full bg-gradient-to-l from-sage-light via-sage to-sage-light" />
        <div className="mt-6 space-y-3 text-[15.5px] leading-relaxed text-charcoal/85 md:text-base">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <a
          href={links.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-dark transition-colors hover:text-sage"
        >
          <FaMapMarkerAlt size={14} aria-hidden="true" />
          {identity.address}
        </a>
        <p className="mt-6">
          <a
            href={links.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sage-dark underline-offset-4 transition-all hover:underline"
          >
            לקרוא עוד על שיטת סאטיה ועל הדרך שלי – לאתר המלא
            <FaArrowLeft size={12} aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  )
}
