import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // CRITICAL: Relative path for asset routing
  plugins: [react()],
})
