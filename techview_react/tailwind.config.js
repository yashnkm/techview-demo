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
        // Light Theme Colors
        'ivory-white': '#FDFDFD',
        'cool-gray': '#EAEFF2',
        'steel-blue': '#4682B4',
        'powder-blue': '#B0D6E8',
        
        // Dark Theme Colors
        'indigo-dye': '#264653',
        'dark-bg': '#264653', // Updated to use Indigo Dye
      },
    },
  },
  plugins: [],
}

