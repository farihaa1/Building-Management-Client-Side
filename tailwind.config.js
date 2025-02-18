/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#DD2D4A',
        secondaryColor: '#0C0F26',
        primary: '#880D1E',
        primaryText: '#CBEEF3',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pSans: ["PT Sans Narrow", "sans-serif"],
        syne: [ "Syne", "sans-serif"],
        play: [ "Playfair Display", "sans-serif"],
        mulish: [ "Mulish", "sans-serif"],
      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

