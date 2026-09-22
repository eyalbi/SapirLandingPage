import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiUserPlus } from 'react-icons/fi'
import { links } from '../data.js'

const actions = [
  { label: 'התקשרות', href: links.tel, Icon: FiPhone },
  { label: 'וואטסאפ', href: links.whatsapp, Icon: FaWhatsapp, external: true },
  { label: 'שמירה', href: links.vcf, Icon: FiUserPlus },
]

export default function StickyBar() {
  return (
    <nav
      aria-label="פעולות מהירות"
      className="fixed inset-x-0 bottom-0 z-10 border-t border-warm-border bg-ivory/95 backdrop-blur md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-3">
        {actions.map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium text-charcoal transition-colors active:bg-warm-card"
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
