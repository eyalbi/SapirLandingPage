const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'שהייה',
    description:
      'השהייה עם מה שיש היא היכולת להיות בנוכחות מלאה, ללא שיפוט וללא צורך לשנות את המציאות. להיות עם מה שיש דרך נשימה, תודעה ושפה.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4C14 4 7 10 7 16a7 7 0 0014 0c0-6-7-12-7-12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 16v-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'חיבור פנימי',
    description:
      'תחושות, רגשות וזכרונות עם הילד הפנימי, מה שגורם ליצירת דיאלוג פנימי עמוק ואותנטי עם עצמך.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M8 14h12M17 10l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="14" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: 'בחירה מודעת',
    description:
      'הבחירה בהוויה בכל רגע נתון בחיינו היא זו שעוצרת את האוטומטיות ואת התגובתיות, ומאפשרת לנו מרחב של בחירה ואפשרויות נוספות להתנהלות.',
  },
]

export default function AboutSatya() {
  return (
    <section id="satya" className="py-24 bg-warm-card">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sage-dark text-sm font-medium tracking-widest uppercase mb-3">
            הגישה
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5">
            מהי שיטת סאטיה?
          </h2>
          <p className="text-warm-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            שיטת סאטיה היא שיטת אימון והתפתחות אישית המזמינה אותנו לעצור,
            להקשיב ולהכיר את עצמנו לעומק. היא מבוססת על מודעות, אחריות פנימית
            וחיבור בינינו לבין תחושות הגוף שלנו, בעצם לרובד יותר עמוק בעצמנו.
            השיטה אינה שואפת ״לתקן״ את האדם, אלא לאפשר לו לפגוש את עצמו כפי
            שהוא, להבין מה מניע אותו ולפעול יותר מתוך חופש, נוכחות ובחירה
            מודעת. דרך ההיכרות עם הדפוסים והאוטומטים שמלווים אותנו, מתאפשר לנו
            לחיות חיים מדויקים יותר, מתוך חמלה, נינוחות ושמחה.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-ivory rounded-2xl p-8 border border-warm-border hover:border-sage-light transition-colors duration-200 group"
            >
              <div className="text-sage mb-5 group-hover:text-sage-dark transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-ivory rounded-2xl p-8 md:p-10 border border-warm-border mb-12">
          <h3 className="text-xl font-semibold text-charcoal mb-4">
            איך עובד האימון בשיטת סאטיה?
          </h3>
          <p className="text-warm-gray text-sm leading-relaxed mb-4">
            באימון האישי בשיטת סאטיה מתקיימת חזרה הדרגתית להכרה ולמודעות של
            תחושות גופינו,{' '}
            <strong className="font-semibold text-charcoal">
              נולדנו יצורים חשים
            </strong>
            . דרך ההתבוננות בתחושות כמו: כיווץ, התרחבות, מתח ריפיון וכו׳. לאחר
            מכן נלמד כי אנו יכולים לבחור הוויות וע״י כך תיווצר אפשרות לעצור את
            האוטומט, להרחיב את הנשימה ולבחור תגובה חדשה.
          </p>
          <p className="text-warm-gray text-sm leading-relaxed">
            האימון מתקיים בקצב של המתאמן, מתוך שיח פתוח ולא שיפוטי, ומאפשר
            פיתוח יציבות פנימית ויכולת לפעול בעולם ממקום מודע ושלם יותר.
          </p>
        </div>

        {/* Quote */}
        <blockquote className="relative text-center max-w-2xl mx-auto">
          <div className="absolute top-0 right-0 text-sage-light text-8xl font-serif leading-none select-none">
            ״
          </div>
          <p className="text-charcoal text-xl md:text-2xl font-light leading-relaxed px-8 pt-6">
          החיים הם לא חזרה גנרלית, הם מה שקורה כאן ועכשיו
          </p>
          <footer className="mt-4 text-warm-gray text-sm">
            <span className="font-medium">נטאלי בן דוד</span>
            <span className="mx-2">·</span>
            מפתחת שיטת סאטיה
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
