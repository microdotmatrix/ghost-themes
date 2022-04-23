module.exports = {
  content: require('fast-glob').sync([
    './packages/ggslayley/**/*.hbs',
    './packages/ggslayley/**/*.html',
    './packages/ggslayley/assets/js/**/*.js'
  ]),
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
