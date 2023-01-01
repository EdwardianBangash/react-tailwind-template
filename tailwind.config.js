/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepOrange: '#FF6900',
        lightOrange: '#FBA3AC',
        lightPurple: '#6a0064'
      }
    },
  },
  plugins: [],
}
