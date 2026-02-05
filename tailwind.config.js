/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        ink: '#0f172a',
        muted: '#475569',
        accent: '#2563eb',
        surface: '#f8fafc',
      },
    },
  },
  plugins: [],
}