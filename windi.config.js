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
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'lg']
    }),
    require('@windicss/plugin-heropatterns')({
      patterns: ['topography'],
      colors: {
        default: '#F3F4F6'
      },
      opacity: {
        default: '1.0'
      }
    }),
    require('tailwindcss-debug-screens')
  ]
}
