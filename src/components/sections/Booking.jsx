export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-warm-card">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sage-dark text-sm font-medium tracking-widest uppercase mb-3">
            נתחיל בפגישה
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5">
            קביעת פגישת היכרות
          </h2>
          <p className="text-warm-gray text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-2">
            אם יש בך תחושה שמבקשת עצירה, ורצון עולה בך להקשיב פנימה ולפגוש את
            עצמך — אני מזמינה אותך לבוא להתאמן.
          </p>
          <p className="text-warm-gray/70 text-sm">
            שעות זמינות:{' '}
            <span className="font-medium text-warm-gray">9:00 – 17:00</span>
            {' '}· קליניקה ו/או זום
          </p>
        </div>

        {/* Calendly embed */}
        <div className="bg-ivory rounded-2xl border border-warm-border overflow-hidden shadow-sm">
          <iframe
            src="https://calendly.com/sapir682m"
            title="קביעת פגישה עם ספיר מנחם"
            width="100%"
            height="650"
            frameBorder="0"
            className="w-full"
            style={{ minWidth: '320px' }}
          />
        </div>

        {/* Fallback contact note */}
        <p className="text-center text-warm-gray/70 text-sm mt-6">
          מעדיפים לדבר ישירות?{' '}
          <a
            href="tel:0549765471"
            className="text-sage-dark hover:underline font-medium"
          >
            054-9765471
          </a>
          {' '}או{' '}
          <a
            href="mailto:Sapir682m@gmail.com"
            className="text-sage-dark hover:underline font-medium"
          >
            Sapir682m@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
