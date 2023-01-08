
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'primary': '#F2A81D',
      'black': 'rgb(0 0 0)'
    },
    extend: {
      fontFamily: {
        poppins: ['PoppinsRegular', 'sans-serif']
      }
    },
  },
  plugins: [],
}
