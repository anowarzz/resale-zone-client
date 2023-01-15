/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      Red: '#FF3811'
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
