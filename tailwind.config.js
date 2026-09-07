/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Logo Green
          primary: '#39B54A', 
          'primary-alt': '#2E963C',
          'primary-light': '#D1F5D3',
          // Neutrals & Accents matching logo
          accent: '#262626',
          'accent-dark': '#000000',
          'accent-light': '#F5F5F5',
          
          // Dark backgrounds (formerly used for text)
          dark: '#F1F5F9', // Primary text
          darker: '#FFFFFF', // Headings / Pure white
          
          // Cards & Surfaces (formerly used for light backgrounds)
          light: '#0A0A0A', // Deep background
          gray: '#94A3B8', // Secondary text
          border: '#1E293B', // Subtle borders

        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', '"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
