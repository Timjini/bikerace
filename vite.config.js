import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://serene-castle-01441.herokuapp.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    react()
  ],
})
