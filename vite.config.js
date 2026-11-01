import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@domain': fileURLToPath(new URL('./src/domain', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@application': fileURLToPath(new URL('./src/application', import.meta.url)),
      '@presentation': fileURLToPath(new URL('./src/presentation', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap', '@phosphor-icons/react'],
  },
  server: {
    host: true,
    allowedHosts: true,
  },
});
