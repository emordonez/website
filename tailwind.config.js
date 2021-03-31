module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.js'
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem'
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'last', 'hover', 'focus'],
      opacity: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')]
}
