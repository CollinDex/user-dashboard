/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'customBlue': '#4368B0',
      'customText': '#fffff',
      'danger': '#e3342f',
     }),
    extend: {},
  },
  plugins: [],
}