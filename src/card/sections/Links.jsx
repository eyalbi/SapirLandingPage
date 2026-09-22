import { FaWhatsapp, FaInstagram, FaFacebook, FaSpotify, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiMail, FiGlobe } from 'react-icons/fi'
import { links } from '../data.js'

const items = [
  { label: 'WhatsApp', href: links.whatsapp, Icon: FaWhatsapp, color: '#25D366' },
  { label: 'Phone', href: links.tel, Icon: FiPhone, color: '#6A9164' },
  { label: 'Email', href: links.mail, Icon: FiMail, color: '#6A9164' },
  { label: 'Website', href: links.site, Icon: FiGlobe, color: '#6A9164' },
  { label: 'Instagram', href: links.instagram, Icon: FaInstagram, color: '#E4405F' },
  { label: 'Facebook', href: links.facebook, Icon: FaFacebook, color: '#0866FF' },
  { label: 'Spotify', href: links.spotify, Icon: FaSpotify, color: '#1DB954' },
  { label: 'YouTube', href: links.youtube, Icon: FaYoutube, color: '#FF0000' },
]

export default function Links() {
  return (
    <section className="mt-7" aria-label="קישורים">
      <ul className="grid grid-cols-4 gap-x-1.5 gap-y-3">
        {items.map(({ label, href, Icon, color }) => {
          const external = !href.startsWith('tel:') && !href.startsWith('mailto:')
          return (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex flex-col items-center gap-1.5 rounded-xl py-2 transition-transform active:scale-95"
                style={{ color }}
              >
                <Icon size={28} aria-hidden="true" />
                <span className="text-[11px] font-medium leading-snug text-warm-gray">{label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
