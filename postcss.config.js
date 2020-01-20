const purgecssConfig = {
  content: ['./components/**/*.js', './pages/**/*.js', './node_modules/react-day-picker/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': purgecssConfig
  }
}
