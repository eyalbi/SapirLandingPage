import { useState } from 'react'
import { FaShareAlt } from 'react-icons/fa'
import { identity, CARD_URL } from '../data.js'

export default function Hero() {
  const [toast, setToast] = useState('')

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: `${identity.name} | ${identity.title}`, text: identity.tagline, url: CARD_URL })
      } else {
        await navigator.clipboard.writeText(CARD_URL)
        setToast('הקישור הועתק')
        setTimeout(() => setToast(''), 2200)
      }
    } catch {
      /* share sheet dismissed */
    }
  }

  return (
    <header className="relative">
      <div className="card-hero-texture relative h-44 md:h-56">
        <button
          type="button"
          onClick={share}
          aria-label="שיתוף הכרטיס"
          className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-md backdrop-blur transition-all duration-200 hover:scale-110 hover:bg-white/30 active:scale-95 md:left-8 md:top-6"
        >
          <FaShareAlt size={18} aria-hidden="true" />
        </button>
        {toast && (
          <p role="status" className="absolute left-4 top-16 rounded-full bg-charcoal px-3 py-1 text-xs text-white md:left-8 md:top-20">
            {toast}
          </p>
        )}
      </div>

      <div className="card-fade-up -mt-16 px-4 text-center md:-mt-20">
        <img
          src={identity.photo}
          alt={identity.name}
          className="card-float mx-auto h-32 w-32 rounded-full border-4 border-ivory object-cover object-[50%_18%] shadow-[0_10px_30px_rgba(45,41,38,0.18)] md:h-40 md:w-40"
        />
        <h1 className="mt-4 text-3xl font-bold text-charcoal md:text-4xl">{identity.name}</h1>
        <p className="mt-1 text-lg font-semibold text-sage-dark md:text-xl">{identity.title}</p>
        <p className="mt-2 text-sm text-warm-gray">{identity.tagline}</p>
      </div>
    </header>
  )
}
