import { useState } from 'react'
import { pillars, methodQuote } from '../data.js'

export default function Satya() {
  const [active, setActive] = useState(null)

  return (
    <section className="mt-7" aria-labelledby="satya-heading">
      <h2 id="satya-heading" className="mb-1 text-center text-lg font-bold text-charcoal">
        שיטת סאטיה
      </h2>
      <p className="mb-3 text-center text-[13px] text-warm-gray">לחצו על עמוד כדי לקרוא</p>
      <div className="grid grid-cols-3 gap-2">
        {pillars.map((p, i) => {
          const on = active === i
          return (
            <button
              key={p.title}
              type="button"
              onClick={() => setActive(on ? null : i)}
              aria-pressed={on}
              className={`rounded-xl border px-2 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                on ? 'border-sage bg-sage text-white shadow-sm' : 'border-warm-border bg-white/60 text-charcoal hover:border-sage-light'
              }`}
            >
              {p.title}
            </button>
          )
        })}
      </div>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${active !== null ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          {active !== null && (
            <p className="mt-3 rounded-xl border border-sage-light bg-white/70 px-4 py-3 text-[14px] leading-relaxed text-warm-gray">
              {pillars[active].text}
            </p>
          )}
        </div>
      </div>
      <figure className="mt-4 text-center">
        <blockquote className="text-[14px] font-medium text-charcoal">״{methodQuote.text}״</blockquote>
        <figcaption className="mt-1 text-[12px] text-warm-gray">— {methodQuote.by}</figcaption>
      </figure>
    </section>
  )
}
