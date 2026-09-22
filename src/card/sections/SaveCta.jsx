import { FaPlus, FaCalendarCheck } from 'react-icons/fa'
import { links } from '../data.js'

export default function SaveCta() {
  return (
    <div className="card-fade-up mx-auto mt-8 flex max-w-md flex-col items-center gap-3 px-4" style={{ animationDelay: '260ms' }}>
      <a
        href={links.vcf}
        className="card-ring inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-sage to-sage-dark px-8 py-4 text-lg font-bold text-white shadow-lg ring-4 ring-sage-light/60 transition-all duration-200 hover:scale-[1.04] hover:shadow-xl active:scale-95"
      >
        <FaPlus size={16} aria-hidden="true" />
        שמרו אותי באנשי הקשר
      </a>
      <a
        href={links.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border-2 border-sage-light bg-white px-5 py-2.5 text-sm font-semibold text-sage-dark transition-all duration-200 hover:border-sage hover:bg-sage hover:text-white active:scale-95"
      >
        <FaCalendarCheck size={15} aria-hidden="true" />
        שיחת היכרות – 20 דקות, ללא&nbsp;עלות
      </a>
    </div>
  )
}
