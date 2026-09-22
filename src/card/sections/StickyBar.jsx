import { FaPhoneAlt, FaWhatsapp, FaUserPlus } from 'react-icons/fa'
import { links } from '../data.js'

const actions = [
  { label: 'התקשרות', href: links.tel, Icon: FaPhoneAlt },
  { label: 'וואטסאפ', href: links.whatsapp, Icon: FaWhatsapp, external: true },
  { label: 'שמירה', href: links.vcf, Icon: FaUserPlus },
]

export default function StickyBar() {
  return (
    <nav
      aria-label="פעולות מהירות"
      className="fixed inset-x-0 bottom-0 z-10 border-t border-warm-border bg-ivory/95 shadow-[0_-6px_20px_rgba(45,41,38,0.08)] backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-3">
        {actions.map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-charcoal transition-colors active:bg-warm-card"
            >
              <Icon size={20} aria-hidden="true" className="text-sage-dark" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
