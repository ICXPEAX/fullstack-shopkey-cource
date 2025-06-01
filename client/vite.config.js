import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Перенаправляем все запросы, начинающиеся с /api
      '/api': {
        target: 'http://localhost:5000', // Ваш Express-сервер
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false
      }
    }
  },
  optimizeDeps: {
    include: ['jwt-decode'],
    esbuildOptions: {
      format: 'esm'
    }
  }
})