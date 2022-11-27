/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      Red: '#FF3811'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
