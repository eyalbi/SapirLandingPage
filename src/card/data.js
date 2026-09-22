// Digital business card content — the card's single source of truth.
// The card is a 20-second introduction; the full story lives on the landing page.
export const SITE = 'https://satyabysapir.com'
export const CARD_URL = `${SITE}/card`

export const identity = {
  name: 'ספיר מנחם',
  title: 'מאמנת רגשית בשיטת סאטיה',
  tagline: 'לעצור. להרגיש. להיות.',
  address: 'מקור חיים 10, שכונת שפירא, תל אביב',
  phoneDisplay: '054-9765471',
  photo: '/images/sapir-card.jpg',
  qr: '/card-qr.png',
}

export const links = {
  calendly: 'https://calendly.com/sapir682m/30min',
  vcf: '/sapir.vcf',
  whatsapp: 'https://wa.me/9720549765471',
  tel: 'tel:+972549765471',
  mail: 'mailto:Sapir682m@gmail.com',
  site: SITE,
  instagram: 'https://www.instagram.com/sapir_sapphire',
  facebook: 'https://www.facebook.com/sapir.menahem',
  spotify: 'https://open.spotify.com/show/2RKpn7ZGJzRhHsldMgwZhW',
  youtube: 'https://www.youtube.com/playlist?list=PLi9edZk5k1ZFjlwxklKM6kF1m8huc7GJF',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('מקור חיים 10, תל אביב'),
}

// One compact "about": who, credentials, how it works, for whom, one belief.
export const about = [
  'מאמנת רגשית בשיטת סאטיה, בוגרת בית הספר אימושיין של נטאלי בן דוד (הסמכה 2025).',
  'אני מלווה אנשים שכבר מבינים מה הם רוצים לשנות – ועדיין מוצאים את עצמם חוזרים לאותה תגובה. באימון אנחנו עוצרים, מקשיבים למה שהגוף מספר, ולומדים לבחור אחרת ברגע האמת.',
  'המפגשים מתקיימים בקליניקה בשכונת שפירא בתל אביב או בזום, בקצב שלך, במרחב מכיל ולא שיפוטי. מתאים למי שרוצה להכיר את עצמו לעומק, לזהות דפוסים אוטומטיים ולפעול מתוך חופש ובחירה.',
  'אני מאמינה שכל אדם נולד שלם – ושהשינוי מתחיל ברגע שמסכימים לעצור, להרגיש ולהיות.',
]
