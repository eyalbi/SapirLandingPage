import { FaInstagram, FaWhatsapp, FaFacebook, FaSpotify } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    color: 'hover:text-pink-400',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/9720549765471',
    color: 'hover:text-green-400',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    color: 'hover:text-blue-400',
  },
  {
    icon: FaSpotify,
    label: 'Spotify Podcast',
    href: 'https://open.spotify.com/',
    color: 'hover:text-green-300',
  },
]

const navLinks = [
  { label: 'מי אני', href: '#about' },
  { label: 'שיטת סאטיה', href: '#satya' },
  { label: 'קביעת פגישה', href: '#booking' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              ספיר מנחם
            </p>
            <p className="text-white/50 text-sm mb-4">
              אימון אישי בשיטת סאטיה
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              מלווה אנשים בתהליכים של חיבור פנימי, הקשבה והעמקה — גם כשאין
              תשובות מיידיות.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/80 text-sm font-medium mb-4">ניווט מהיר</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/80 text-sm font-medium mb-4">צור קשר</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:0549765471"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  054-9765471
                </a>
              </li>
              <li>
                <a
                  href="mailto:Sapir682m@gmail.com"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  Sapir682m@gmail.com
                </a>
              </li>
              <li className="text-white/40 text-sm">קליניקה ו/או זום</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-white/40 transition-colors duration-200 ${color}`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs">
            © {year} ספיר מנחם · כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  )
}
