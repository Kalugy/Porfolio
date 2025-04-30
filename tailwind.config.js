/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['"Montserrat"', 'sans-serif'], // Replace Exo with Montserrat
        },
      },
    },
    plugins: [],
  }