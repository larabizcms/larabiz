const mix = require("laravel-mix");
//const buildPath = 'build';

mix.disableNotifications();
mix.options(
    {
        postCss: [
            require('postcss-discard-comments')(
                {
                    removeAll: true
                }
            )
        ],
        uglify: {
            comments: false
        },
        terser: {
            extractComments: false,
            terserOptions: {
                output: {
                    comments: false,
                },
            },
        },
    }
);

// mix.setResourceRoot(`/${buildPath}`);
// mix.setPublicPath(`public/${buildPath}`);

mix.webpackConfig({
    resolve: {
        extensions: [".ts", ".tsx"],
        alias: {
            //'@': path.resolve(__dirname, 'resources/js/'),
        },
    },
    output: {
        chunkFilename: mix.inProduction() ? "js/chunks/[name].[chunkhash].js" : "js/chunks/dev/[name].js",
        filename: "[name].js",
        //clean: true,
    },
});

mix.js("resources/js/app.tsx", "js/app.js")
    .extract([
        'react',
        'react-dom',
        'react-router-dom',
        'react-redux',
        'react-dom/client',
    ], 'js/vendor-core.min.js')
    .extract()
    .react()
    .postCss("resources/css/app.css", "css/app.css", [
        //
    ]);

mix.version();

if (!mix.inProduction()) {
    mix.browserSync({
        files: [
            'modules/**/Http/Controllers/*.php',
            'modules/**/*.blade.php',
            'public/**/*.js',
            'public/**/*.sass',
            'public/**/*.css',
        ],
        proxy: process.env.APP_URL,
        notify: false,
        snippetOptions: {
            rule: {
                match: /<\/head>/i,
                fn: function (snippet, match) {
                    return snippet + match;
                }
            }
        }
    });
}
