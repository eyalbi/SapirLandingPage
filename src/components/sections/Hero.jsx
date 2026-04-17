export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-light/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="text-sage-dark text-sm font-medium tracking-widest uppercase mb-6 opacity-80">
          אימון אישי בשיטת סאטיה
        </p>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight mb-6 text-balance">
          עצור.{' '}
          <span className="text-sage-dark">הרגש.</span>{' '}
          היה.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-warm-gray font-light leading-relaxed mb-4 max-w-xl mx-auto">
          ליווי אישי בשיטת סאטיה — מפגש אמיתי עם עצמך, ברגע הנוכחי
        </p>

        <p className="text-base text-warm-gray/80 font-light leading-relaxed mb-10 max-w-lg mx-auto">
          כשיש בך תחושה שמבקשת עצירה, ורצון עולה בך להקשיב פנימה — אני מזמינה
          אותך לבוא להתאמן.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#booking"
            className="bg-sage hover:bg-sage-dark text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-200 text-base shadow-sm hover:shadow-md"
          >
            קביעת פגישת היכרות
          </a>
          <a
            href="#satya"
            className="text-warm-gray border border-warm-border hover:border-sage hover:text-sage-dark font-medium px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
          >
            למדו על שיטת סאטיה
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-warm-gray/50 animate-bounce">
            <span className="text-xs tracking-widest">גלול מטה</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-warm-gray/40"
            >
              <path
                d="M8 3v10M3 9l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
