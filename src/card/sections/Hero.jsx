import { FiMapPin } from 'react-icons/fi'
import { identity, links, quote } from '../data.js'

export default function Hero() {
  return (
    <header className="text-center">
      <img
        src={identity.photo}
        alt={identity.name}
        className="mx-auto mb-4 h-28 w-28 rounded-full border-[3px] border-sage-light object-cover object-[50%_18%] shadow-sm"
      />
      <h1 className="text-2xl font-bold text-charcoal">{identity.name}</h1>
      <p className="mt-0.5 text-[15px] font-medium text-sage-dark">{identity.title}</p>
      <p className="mt-3 text-base font-semibold text-charcoal">{identity.tagline}</p>
      <p className="text-[13px] text-warm-gray">{identity.sub}</p>
      <a
        href={links.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1.5 inline-flex items-center gap-1 text-[12.5px] font-medium text-sage-dark hover:text-sage"
      >
        <FiMapPin size={13} aria-hidden="true" />
        {identity.address}
      </a>
      <blockquote className="mx-auto mt-5 max-w-xs text-[13.5px] leading-relaxed text-warm-gray">{quote}</blockquote>
    </header>
  )
}
