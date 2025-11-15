import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CAMBIO AQUÍ: Importa el paquete que acabamos de instalar
import tailwindcss from '@tailwindcss/postcss' 
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})