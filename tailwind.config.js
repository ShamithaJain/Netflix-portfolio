/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          black: '#141414',
          red: '#E50914',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'netflix': '0 8px 16px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(229, 9, 20, 0.3)',
      },
    },
  },
  plugins: [],
}

