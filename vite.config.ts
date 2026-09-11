import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
    }
  }
})
