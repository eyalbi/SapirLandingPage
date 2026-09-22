import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF, FaSpotify, FaYoutube, FaGlobe } from 'react-icons/fa'
import { links } from '../data.js'

const items = [
  { label: 'טלפון', href: links.tel, Icon: FaPhoneAlt },
  { label: 'וואטסאפ', href: links.whatsapp, Icon: FaWhatsapp, external: true },
  { label: 'מייל', href: links.mail, Icon: FaEnvelope },
  { label: 'אינסטגרם', href: links.instagram, Icon: FaInstagram, external: true },
  { label: 'פייסבוק', href: links.facebook, Icon: FaFacebookF, external: true },
  { label: 'פודקאסט', href: links.spotify, Icon: FaSpotify, external: true },
  { label: 'יוטיוב', href: links.youtube, Icon: FaYoutube, external: true },
  { label: 'האתר', href: links.site, Icon: FaGlobe, external: true },
]

export default function IconRow() {
  return (
    <nav aria-label="ערוצי קשר" className="card-fade-up mx-auto mt-8 max-w-3xl px-4" style={{ animationDelay: '120ms' }}>
      <ul className="grid grid-cols-4 gap-y-6 md:grid-cols-8 md:gap-y-0">
        {items.map(({ label, href, Icon, external }, i) => (
          <li key={label} className="flex flex-col items-center gap-2">
            <a
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-sage bg-white text-sage-dark shadow-[0_6px_18px_rgba(106,145,100,0.18)] transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-sage-dark hover:bg-sage hover:text-white hover:shadow-[0_12px_28px_rgba(106,145,100,0.35)] active:scale-95 md:h-[76px] md:w-[76px]"
              style={{ animationDelay: `${140 + i * 60}ms` }}
            >
              <Icon size={28} aria-hidden="true" className="transition-transform duration-200 group-hover:scale-110" />
            </a>
            <span className="text-[13px] font-medium text-charcoal">{label}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
