import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { about } from '../data.js'

export default function About() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mt-7" aria-labelledby="about-heading">
      <h2 id="about-heading" className="mb-3 text-center text-lg font-bold text-charcoal">
        אודות
      </h2>
      <ul className="divide-y divide-warm-border overflow-hidden rounded-2xl border border-warm-border bg-white/60">
        {about.map((item, i) => {
          const isOpen = open === i
          return (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`about-panel-${i}`}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-start text-[15px] font-semibold text-charcoal transition-colors hover:bg-warm-card"
              >
                <span>{item.title}</span>
                <FiChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 text-sage-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                id={`about-panel-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 text-[14px] leading-relaxed text-warm-gray">
                    {item.paragraphs?.map((p) => (
                      <p key={p} className="mb-2 last:mb-0">{p}</p>
                    ))}
                    {item.bullets && (
                      <ul className="list-disc space-y-1 pe-5">
                        {item.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
