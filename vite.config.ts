import react from '@vitejs/plugin-react'
// vite.config.js (o vite.config.ts)
import { defineConfig } from 'vite'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwind,  // <-- Sin paréntesis
        autoprefixer
      ]
    }
  },
  plugins: [react()],
})