/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      gray: '#E5E5E5',
      darkgray: '#AAAAAA'
    },
    screens: {
      lg: {
        min: '1025px'
      },
      md: {
        max: '1024px',
        min: '768px'
      },
      sm: {
        max: '767px'
      }
    },
    width: {
      content: '70rem'
    },
    extend: {},
  },
  plugins: [],
}
