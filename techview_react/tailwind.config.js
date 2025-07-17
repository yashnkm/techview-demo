/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'akkurat': ['Akkurat', 'Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'familjen': ['Familjen Grotesk', 'sans-serif'],
        'edu-hand': ['Edu NSW ACT Hand', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}

