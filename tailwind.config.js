/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rabouquet Brand Colors - Elegant Pinkish Palette
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6', // Primary brand pink
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185', // Secondary rose
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#20BD5A',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'], // Elegant headings
        sans: ['Inter', 'system-ui', 'sans-serif'], // Clean body text
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      boxShadow: {
        'pink': '0 10px 40px -10px rgba(244, 114, 182, 0.5)',
        'pink-lg': '0 20px 60px -15px rgba(244, 114, 182, 0.6)',
      },
    },
  },
  plugins: [],
}
