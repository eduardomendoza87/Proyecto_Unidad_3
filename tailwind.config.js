/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de que vigile tus archivos de React
  ],
  theme: {
    extend: {
      // 1. Referenciamos las variables de fuente
      fontFamily: {
        'sans': 'var(--font-sans)',
        'display': 'var(--font-display)',
      },
      // 2. Referenciamos las variables de color
      colors: {
        'brand': {
          DEFAULT: 'var(--color-brand)',
          '600': 'var(--color-brand-600)',
        },
        'dark-bg': 'var(--color-dark-bg)',
        'light-bg': 'var(--color-light-bg)',
        'white': 'var(--color-white)',
        'text-secondary': 'var(--color-text-secondary)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Plugin útil para los artículos
  ],
}