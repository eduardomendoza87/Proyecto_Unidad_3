/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'var(--font-sans)',
        'display': 'var(--font-display)',
      },
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
    require('@tailwindcss/typography'), 
  ],
}