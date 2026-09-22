import { FiCalendar, FiUserPlus } from 'react-icons/fi'
import { links } from '../data.js'

export default function Actions() {
  return (
    <div className="mt-5 space-y-2">
      <a
        href={links.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl bg-sage px-4 py-3 text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.985] hover:bg-sage-dark"
      >
        <FiCalendar size={18} aria-hidden="true" />
        קביעת שיחת היכרות – 20 דקות, ללא&nbsp;עלות
      </a>
      <a
        href={links.vcf}
        className="flex items-center justify-center gap-2 rounded-xl bg-charcoal px-4 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.985] hover:bg-charcoal/90"
      >
        <FiUserPlus size={17} aria-hidden="true" />
        שמירה לאנשי הקשר
      </a>
    </div>
  )
}
