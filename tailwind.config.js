/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        sage: '#8FAF8A',
        'sage-dark': '#6A9164',
        'sage-light': '#C5D9C3',
        charcoal: '#2D2926',
        'warm-gray': '#7A6E68',
        'warm-border': '#E8E2DB',
        'warm-card': '#F3EFE9',
      },
      fontFamily: {
        hebrew: ['"Noto Sans Hebrew"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
