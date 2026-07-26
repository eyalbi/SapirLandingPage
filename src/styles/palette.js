/**
 * Site color palette — single source of truth.
 *
 * Consumed by tailwind.config.js (which exposes these as the `ivory`, `sage`,
 * `charcoal`, … utility colors), by src/styles/index.css via @apply, and by the
 * Calendly widget in src/components/sections/Booking.jsx.
 *
 * To switch themes, change the `activePalette` export at the bottom. Nothing
 * else in the codebase needs to be touched.
 */

/** Original warm sage/ivory theme. */
export const warmSage = {
  ivory: '#FAF8F5',
  sage: '#8FAF8A',
  'sage-dark': '#6A9164',
  'sage-light': '#C5D9C3',
  charcoal: '#2D2926',
  'warm-gray': '#7A6E68',
  'warm-border': '#E8E2DB',
  'warm-card': '#F3EFE9',
}

/**
 * Experimental cool slate theme, sampled from the "Grief Support Therapy"
 * reference: muted periwinkle-slate bands, white/near-white surfaces,
 * near-black headings and a cool mid-gray for body copy.
 */
export const slate = {
  ivory: '#FBFCFE',
  sage: '#7A92B0',
  'sage-dark': '#5A708C',
  'sage-light': '#C7D4E3',
  charcoal: '#12151A',
  'warm-gray': '#566070',
  'warm-border': '#D9E1EA',
  'warm-card': '#E9EEF4',
}

/** <<< SWITCH THEMES HERE — set to `warmSage` to revert. >>> */
export const activePalette = warmSage
