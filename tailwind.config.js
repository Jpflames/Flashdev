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
          
          // Deep Blue-Grey for text/headings (not black)
          dark: '#1E293B',
          darker: '#0F172A',
          
          // Light backgrounds
          light: '#F8FAFC',
          gray: '#64748B',
          border: '#E2E8F0',
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
