/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-light': 'rgba(219, 229, 251, 1)',
        'blue': 'rgba(71, 122, 235, 1)',
        'blue-hover': 'rgba(112, 155, 255, 1)',
        'dark': 'rgba(2, 7, 18, 0.8)',
        'dark-light': 'rgba(2, 7, 18, 0.5)',
        'gray': 'rgba(2, 7, 18, 0.4)',
        'yellow': 'rgba(237, 207, 93, 1)',
        'black': 'rgba(2, 7, 18, 1)',
        'white-card': 'rgba(250, 252, 254, 1)',
        'white': 'rgba(255, 255, 255, 1)'

      }
    },
  },
  plugins: [],
}