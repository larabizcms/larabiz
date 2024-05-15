const mix = require("laravel-mix");
const path = require('path');
//const ChunkRenamePlugin = require("webpack-chunk-rename-plugin");

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
        }
    }
);

mix.webpackConfig({
    resolve: {
        extensions: [".ts", ".tsx"],
        alias: {
            //'@': path.resolve(__dirname, 'resources/js/'),
        },
    },
    output: {
        //chunkFilename: mix.inProduction() ? "js/front/chunks/[name].[chunkhash].js" : "js/front/chunks/[name].js",
        filename: "[name].js",
        chunkFilename: "chunks/[name].[chunkhash].js",
    },
});

mix.js("resources/js/app.tsx", "public/js")
    // .extract([
    //     'react',
    //     'react-dom',
    //     'react-router-dom',
    //     'react-redux',
    //     'react-dom/client'
    // ], 'js/vendor-core.min.js')
    .extract()
    .react()
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);

mix.version();

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
