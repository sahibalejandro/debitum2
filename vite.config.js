import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.js'
    }
  }
})
