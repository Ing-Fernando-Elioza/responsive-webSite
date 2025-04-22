/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lighColor:'#04DFBE',
        darkColor: '#2D474E',
      }
    },
  },
  plugins: [],
}

