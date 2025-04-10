import react from '@vitejs/plugin-react'
// vite.config.js (o vite.config.ts)
import { defineConfig } from 'vite'
import tailwind from 'tailwindcss'

export default defineConfig({
  publicDir: './public',
  css: {
    postcss: {
      plugins: [
        tailwind
      ]
    }
  },
  build:{
    outDir: 'docs'
  },
  plugins: [react()],
})