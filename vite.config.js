import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: 'localhost',
    port: 3000,
    open: true
  },
  plugins: [react()],
  base: '/pokedux/'
})
