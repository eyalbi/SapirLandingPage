import { useState } from 'react'
import { FiShare2, FiMaximize2 } from 'react-icons/fi'
import { identity, CARD_URL, SITE } from '../data.js'

export default function QrShare() {
  const [showQr, setShowQr] = useState(false)
  const [toast, setToast] = useState('')

  const share = async () => {
    const data = { title: `${identity.name} | ${identity.title}`, text: identity.tagline, url: CARD_URL }
    try {
      if (navigator.share) {
        await navigator.share(data)
      } else {
        await navigator.clipboard.writeText(CARD_URL)
        setToast('הקישור הועתק')
        setTimeout(() => setToast(''), 2200)
      }
    } catch {
      /* user dismissed the share sheet */
    }
  }

  return (
    <section className="mt-7 border-t border-warm-border pt-5 text-center" aria-label="שיתוף">
      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-2 rounded-xl border border-warm-border bg-white/70 px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-sage-light active:scale-[0.98]"
        >
          <FiShare2 size={16} aria-hidden="true" />
          שיתוף הכרטיס
        </button>
        <button
          type="button"
          onClick={() => setShowQr((v) => !v)}
          aria-expanded={showQr}
          className="inline-flex items-center gap-2 rounded-xl border border-warm-border bg-white/70 px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-sage-light active:scale-[0.98]"
        >
          <FiMaximize2 size={16} aria-hidden="true" />
          {showQr ? 'הסתרת QR' : 'הצגת QR'}
        </button>
      </div>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${showQr ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <img
            src={identity.qr}
            alt="QR לכרטיס"
            className="mx-auto mt-4 h-40 w-40 rounded-xl border border-warm-border bg-white p-2"
          />
          <p className="mt-2 text-[12px] text-warm-gray">
            סרקו לשיתוף · <bdi>{identity.phoneDisplay}</bdi>
          </p>
        </div>
      </div>
      {toast && (
        <p role="status" className="mt-3 inline-block rounded-full bg-charcoal px-3 py-1 text-xs text-white">
          {toast}
        </p>
      )}
      <p className="mt-4 text-[13px]">
        <a href={SITE} className="font-medium text-sage-dark hover:text-sage">satyabysapir.com</a>
      </p>
    </section>
  )
}
