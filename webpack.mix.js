let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('packages/ggslayley/assets/js/app.js', 'js')
  .js('packages/ggslayley/assets/js/lib.js', 'js')
  .sass('packages/ggslayley/assets/scss/main.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [
      require('postcss-import'),
      require('autoprefixer'),
      require('tailwindcss'),
      tailwindcss('tailwind.config.js')
    ],
  })
  .setPublicPath('packages/ggslayley/assets/dist')
  .browserSync({
    proxy: 'localhost:2368',
    port: 8080,
    files: [
      'packages/ggslayley/**/*.hbs',
      'packages/ggslayley/assets/dist/js/app.js',
      'packages/ggslayley/assets/dist/css/main.css'
    ]
  })
  .copy('packages/ggslayley/assets/fonts', 'packages/ggslayley/assets/dist/fonts')
  //.copy('packages/ggslayley/assets/video', 'packages/ggslayley/assets/dist/video')
  //.autoload({
  //  jquery: ['$', 'window.jQuery']
  //})
;
