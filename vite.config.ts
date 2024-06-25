import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@screens': '/src/screens',
      '@store': '/src/store',
      '@services': '/src/services',
      '@contexts': '/src/contexts',
    }
  }
})
