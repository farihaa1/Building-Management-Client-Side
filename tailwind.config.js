/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#0C0F26',
        secondaryColor: '#0C0F26',
        primary: '#3FB9BE',
        primaryText: '#CBEEF3',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pSans: ["PT Sans Narrow", "sans-serif"],
        syne: [ "Syne", "sans-serif"],
        play: [ "Playfair Display", "sans-serif"],
        antonio: [ "Antonio", "sans-serif"],
        mulish: [ "Mulish", "sans-serif"],
      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
}

