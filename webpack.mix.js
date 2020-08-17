const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
// mix.sass('resources/js/asset/log/vendor/bootstrap/css/bootstrap.min.css','public/log/vendor/bootstrap/css/bootstrap.min.css');
// mix.sass('resources/js/asset/log/fonts/font-awesome-4.7.0/css/font-awesome.min.css','public/log/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
// mix.sass('resources/js/asset/log/fonts/Linearicons-Free-v1.0.0/icon-font.min.css','public/log/fonts/Linearicons-Free-v1.0.0/icon-font.min.css');
// mix.sass('resources/js/asset/log/vendor/animate/animate.css','public/log/vendor/animate/animate.css');
// mix.sass('resources/js/asset/log/vendor/css-hamburgers/hamburgers.min.css','public/log/vendor/css-hamburgers/hamburgers.min.css');
// mix.sass('resources/js/asset/log/vendor/select2/select2.min.css','public/log/vendor/select2/select2.min.css');
// mix.sass('resources/js/asset/log/css/util.css','public/log/css/util.css');
// mix.sass('resources/js/asset/log/css/main.css','public/log/css/main.css');
// mix.js('resources/js/asset/log/vendor/jquery/jquery-3.2.1.min.js','public/log/vendor/jquery/jquery-3.2.1.min.js');
// mix.js('resources/js/asset/log/vendor/bootstrap/js/popper.js','public/log/vendor/bootstrap/js/popper.js');
// mix.js('resources/js/asset/log/vendor/select2/select2.min.js','public/log/vendor/select2/select2.min.js');
// mix.js('resources/js/asset/log/js/main.js','public/log/js/main.js');
