import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    host:true,
    port:5194,
  },
  proxy: {
    '/api': {
      target: 'http://192.168.253.134:5001',
      changeOrigin: true,
    },
  },
})
