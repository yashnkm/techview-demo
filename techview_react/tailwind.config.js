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
      },
      // Centralized Template System
      maxWidth: {
        'main-container': '110.88rem', // Main container max-width
      },
      minHeight: {
        'section-min': '41.25rem', // Section minimum height
      },
      spacing: {
        // Container padding for different screen sizes
        'container-padding-sm': '1rem',    // py-4
        'container-padding-md': '1.75rem', // py-7  
        'container-padding-lg': '2.25rem', // py-9
        // Solutions section padding (slightly smaller)
        'solutions-padding-sm': '3rem',    // py-12
        'solutions-padding-md': '6rem',    // py-24
        'solutions-padding-lg': '7rem',    // py-28
        // Common spacing values
        'section-gap': '2rem',             // pt-8 equivalent
        'overlay-offset': '1.5rem',        // top-6, left-6 equivalent
        'image-height': '24rem',           // h-96 equivalent
      },
      // Grid system
      gridTemplateColumns: {
        'main-layout': 'repeat(12, minmax(0, 1fr))', // 12-column grid
      },
      // Custom text sizes (our 15% increased sizes)
      fontSize: {
        'hero-badge': ['1.25rem', '1.75rem'],     // text-xl
        'hero-badge-lg': ['1.5rem', '2rem'],      // text-2xl
        'hero-heading-sm': ['3rem', '1'],         // text-5xl
        'hero-heading-md': ['3.75rem', '1'],      // text-6xl
        'hero-heading-lg': ['4.5rem', '1'],       // text-7xl
        'hero-heading-xl': ['6rem', '1'],         // text-8xl
        'hero-subtext-sm': ['1.25rem', '1.75rem'], // text-xl
        'hero-subtext-md': ['1.5rem', '2rem'],     // text-2xl
        'hero-subtext-lg': ['1.875rem', '2.25rem'], // text-3xl
        'card-title-sm': ['1.25rem', '1.75rem'],   // text-xl
        'card-title-md': ['1.5rem', '2rem'],       // text-2xl
        'card-title-lg': ['1.875rem', '2.25rem'],  // text-3xl
      },
    },
  },
  plugins: [],
}

