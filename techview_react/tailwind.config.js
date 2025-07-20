/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'akkurat': ['Akkurat', 'Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#1a1a1a',
      },
    },
  },
  plugins: [],
}

