import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Frontend-Dashboard-Assignment/',   // 👈 must match your repo name exactly
  server: {
    port: 5173
  }
})

