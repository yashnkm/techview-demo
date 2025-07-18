/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'akkurat': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'familjen': ['Familjen Grotesk', 'sans-serif'],
        'poiret-one': ['Poiret One', 'cursive'],
        'tenor-sans': ['Tenor Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

