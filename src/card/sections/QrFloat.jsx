import { identity } from '../data.js'

// Desktop only: mirrors the-card's floating "view on your phone" box.
export default function QrFloat() {
  return (
    <aside
      aria-label="לצפייה בטלפון"
      className="fixed bottom-6 left-6 z-10 hidden w-36 flex-col items-center gap-2 rounded-2xl border border-warm-border bg-white/95 p-3 shadow-[0_12px_32px_rgba(45,41,38,0.14)] backdrop-blur md:flex"
    >
      <p className="text-xs font-semibold text-charcoal">לצפייה בטלפון</p>
      <img src={identity.qr} alt="QR לכרטיס" className="h-28 w-28 rounded-lg" />
    </aside>
  )
}
