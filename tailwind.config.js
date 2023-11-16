/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: {
        'banner-default': 'https://via.placeholder.com/1920x650'
      }
    }
  },
  plugins: []
}
