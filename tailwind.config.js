import { activePalette } from './src/styles/palette.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: activePalette,
      fontFamily: {
        hebrew: ['"Noto Sans Hebrew"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
