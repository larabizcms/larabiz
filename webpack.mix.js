const mix = require("laravel-mix");
//const ChunkRenamePlugin = require("webpack-chunk-rename-plugin");

mix.disableNotifications();

//mix.options({ runtimeChunkPath: 'chunks' });

mix.js("resources/js/app.tsx", "public/js")
    .extract()
    .webpackConfig({
        resolve: {
            extensions: [".ts", ".tsx"],
        },
        output: {
            //chunkFilename: mix.inProduction() ? "js/front/chunks/[name].[chunkhash].js" : "js/front/chunks/[name].js",
            filename: "[name].js",
            //clean: true,
            chunkFilename: "chunks/[name].[chunkhash].js",
        },
        // optimization: {
        //     splitChunks: {
        //         maxSize: 1000000,
        //         chunks: 'all'
        //     },
        // },
        // entry: {
        //     mySpecialChunk: "js/chunks",
        //   },
        // plugins: [
        //     new ChunkRenamePlugin({
        //         initialChunksWithEntry: true,
        //         mySpecialChunk: "specialName.[name].js",
        //     }),
        //   ],
    })
    .react()
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);

mix.version();

mix.browserSync('127.0.0.1:8000');

