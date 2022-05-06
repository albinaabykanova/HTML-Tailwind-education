const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  darkMode: 'class', //or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
     extend: {
         colors: {
           prototurk: '#32445a',
           twitter: 'blue'
         },
         spacing: {
            '15': '3.75rem'
         },
         zIndex: {
           '-1' : '-1',
         }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, theme, e }) {
      const calcUtilities = _.map(theme('spacing'), (value, key) => {
        return {
          [`.${e(`calc-h-full-${key}`)}`]: {
            height: `calc(100% - ${value})`
          },
          [`.${e(`calc-w-full-${key}`)}`]: {
            width: `calc(100% - ${value})`
          }
        }
      })

      addUtilities(calcUtilities, {
        variants: ['responsive', 'hover'],
      })
    })
  ],
}

