import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'מי אני', href: '#about' },
  { label: 'שיטת סאטיה', href: '#satya' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md shadow-sm border-b border-warm-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#top"
          className="text-charcoal font-semibold text-lg tracking-wide hover:text-sage-dark transition-colors"
        >
          ספיר מנחם
          <span className="block text-xs font-light text-warm-gray leading-none">
            אימון אישי בשיטת סאטיה
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-warm-gray text-sm font-medium hover:text-sage-dark transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 right-0 h-px w-0 bg-sage group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#booking"
            className="bg-sage text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-sage-dark transition-colors"
          >
            קביעת פגישת היכרות
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="תפריט"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-ivory border-t border-warm-border overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-charcoal font-medium text-base hover:text-sage-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={handleLinkClick}
            className="bg-sage text-white text-sm font-medium px-5 py-2.5 rounded-full text-center hover:bg-sage-dark transition-colors"
          >
            קביעת פגישת היכרות
          </a>
        </nav>
      </div>
    </header>
  )
}
