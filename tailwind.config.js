/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "#F4D04E",
        heading: '#111111',
        paraText: '#6B6B6B',

      },
      fontFamily: {
        FigTree: ["Figtree", 'sans-serif'],
      },
      screens:{
        xs: '200px',
      }
    },
  },
  plugins: [],
}