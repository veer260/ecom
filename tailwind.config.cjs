/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // 'sans': ['Proxima Nova', ],
      display: ['Moon Dance'],
      formal: ['Montserrat']
    },
    extend: {
      keyframes: {
        big: {
          '0%': {
            scale: '1'
          },
          '100%': {
            scale: '1.03'
          }
        }
      },
      animation: {
        'grow': 'big 0.2s 1 ease-out forwards' 
      }
    },
    colors: {
      primary: {
        default: 'rgb(255, 81, 81)',
        light: 'rgb(255, 148, 148)',
        dark: 'rgb(248, 47, 47)'
      },
      gray: colors.gray,
      white: colors.white,
      black: colors.black
    }
  },
  plugins: [],
}
