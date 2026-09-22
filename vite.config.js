import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two HTML entries: the landing page and the digital business card at /card
// (vercel.json rewrites /card -> /card.html).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        card: resolve(__dirname, 'card.html'),
      },
    },
  },
})
