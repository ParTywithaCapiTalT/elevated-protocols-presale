import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dynamic base path that works with Vercel preview links
const getBasePath = (): string => {
  // For production, use the full path
  // For Vercel preview and development, use root path
  return process.env.VERCEL_ENV === 'production' ? '/elevated-protocols-presale/' : '/'
}

// https://vite.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
})
