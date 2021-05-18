const aspectRatio = require('windicss/plugin/aspect-ratio')
const typography = require('windicss/plugin/typography')
const debugScreens = require('tailwindcss-debug-screens')

module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans'],
      mono: ['Inconsolata', 'ui-monospace']
    },
    extend: {
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem'
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      }
    }
  },
  extract: {
    include: [
      './assets/css/main.scss',
      './**/*.html',
      './**/*.js',
      './**/*.vue'
    ]
  },
  safelist: ['prose', 'prose-lg'],
  plugins: [
    aspectRatio,
    typography,
    debugScreens
  ]
}
