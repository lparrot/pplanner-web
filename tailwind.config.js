const theme = require('./themes/default')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme,
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    },
  },
  plugins: [],
  purge: {
    enabled: false,
  },
}
