import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 5173,        // Make sure this matches your ngrok port
    strictPort: true,  // Prevent Vite from changing the port automatically
  }
})
