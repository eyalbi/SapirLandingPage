const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 3h12v10a2 2 0 01-2 2H5a2 2 0 01-2-2V3z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M3 3l6 7 6-7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'Sapir682m@gmail.com',
    href: 'mailto:Sapir682m@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3.5 2h3l1.5 4-2 1.5a10 10 0 004.5 4.5L12 10l4 1.5v3a1.5 1.5 0 01-1.5 1.5C7.3 16 2 10.7 2 4A1.5 1.5 0 013.5 2z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: '054-9765471',
    href: 'tel:0549765471',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="2"
          y="5"
          width="10"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 8.2l4-2.2v6l-4-2.2z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'זום',
    href: null,
  },
]

export default function InstructorBio() {
  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text column */}
          <div>
            <p className="text-sage-dark text-sm font-medium tracking-widest uppercase mb-3">
              מי אני
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              ספיר מנחם
            </h2>
            <p className="text-warm-gray leading-relaxed mb-5">
              שמי ספיר מנחם. אני מתמחה בשיטת סאטיה באימון אישי ומלווה אנשים
              בתהליכים של חיבור פנימי, הקשבה והעמקה. העבודה שלי נשענת על
              נוכחות, תחושות ורגישות – גם כשאין תשובות מיידיות.
            </p>
            <p className="text-warm-gray leading-relaxed mb-5">
              מאמינה שמפגש אמיתי מתחיל עם עצמנו במקום שבו אנחנו מסכימים –
              לעצור, להרגיש ולהיות.
            </p>

            {/* Personal story */}
            <div className="border-r-2 border-sage-light pr-5 mb-6">
              <h3 className="text-base font-semibold text-charcoal mb-3">
                הסיפור האישי שלי – הדרך שלי אל שיטת סאטיה
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-3">
                לאורך השנים ליוותה אותי תחושה פנימית של ״להיות יותר מזה״ –
                <em className="not-italic text-charcoal/70">
                  {' '}
                  "There must be more to life than this"
                </em>{' '}
                (מתוך שירו של פרדי מרקיורי). למרות תנועה, עשייה וחיים מלאים
                כלפי חוץ – עלו בפנים שאלות, חוסר שקט ורצון להבין לעומק מה
                מניע אותי ואת האנשים סביבי.
              </p>
              <p className="text-warm-gray text-sm leading-relaxed mb-3">
                מצאתי את עצמי נמשכת לשיחות עמוקות, להקשבה למה שנאמר שלא
                במילים, ולתחושות שעולות בגוף תוך כדי מפגש. דרך החיים,
                ההתנסויות והאישיות שלי – הבנתי שדווקא מקומות הכיווץ, הבלבול,
                העייפות והכאב – כפי שאני קוראת להם ״מגדילים״ – הם שערים
                להתפתחות.
              </p>
              <p className="text-warm-gray text-sm leading-relaxed">
                המפגש עם שיטת סאטיה היה עבורי רגע של הכרה: שפה שמאפשרת לעצור,
                לבחור להוויה, לחזור לגוף כמקום של אמת. מתוך החוויה האישית
                הזאת בחרתי להתמחות בשיטה וללוות אחרים בתהליך דומה – תהליך של
                חיבור, אחריות ורכות כלפי עצמם.
              </p>
            </div>
          </div>

          {/* Photo + Contact column */}
          <div className="lg:pt-14 flex flex-col items-center lg:items-start gap-6">
            {/* Instructor photo */}
            <div className="w-64 md:w-72 lg:w-full max-w-xs">
              <div className="relative rounded-2xl overflow-hidden border border-warm-border shadow-sm aspect-[3/4]">
                <img
                  src="/images/sapir.jpeg"
                  alt="ספיר מנחם – מאמנת אישית בשיטת סאטיה"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle sage overlay at bottom */}
                <div className="absolute bottom-0 right-0 left-0 h-16 bg-gradient-to-t from-sage-light/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Decorative card */}
            <div className="bg-warm-card rounded-2xl border border-warm-border p-8 mb-0 w-full">
              <h3 className="text-base font-semibold text-charcoal mb-5">
                פרטי התקשרות
              </h3>
              <ul className="space-y-4">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="text-sage flex-shrink-0">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-warm-gray text-sm hover:text-sage-dark transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-warm-gray text-sm">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Credentials badge */}
            <div className="bg-sage-light/30 rounded-2xl border border-sage-light/50 p-6 text-center w-full">
              <p className="text-sage-dark font-semibold text-sm mb-1">
                מאמנת מוסמכת
              </p>
              <p className="text-warm-gray text-xs leading-relaxed">
                מתמחה בשיטת סאטיה באימון אישי
                <br />
                מפותחת על ידי נטאלי בן דוד
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
