import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Valentines-/',   // Important: matches your repo name exactly, with / at the end
})
