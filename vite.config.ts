import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  plugins: [react()],
});