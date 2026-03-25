const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
mix.sass('resources/sass/app.scss', 'public/css')
    .extract(['vue', 'bootstrap'])

    
//mix.version();
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                {   
                    resourceQuery: /^\?vue/,
                    use: ['pug-plain-loader']
                },
                {
                    use: ['raw-loader', 'pug-plain-loader']
                }
                ]
            },
            {
                test: /\.excel$/,
                loader: 'file-loader',
                options: {
                    outputPath: "excel"
                }
            }
        ]
    },
    resolve: {
        fallback: {
            fs: false,
            path: false,
            "timers": require.resolve("timers-browserify"),
            "stream": require.resolve("stream-browserify")
        }
    }
});

//mix.js('resources/js/components/*.vue', 'public/js').pug()