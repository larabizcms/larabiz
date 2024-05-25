import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import laravel from 'laravel-vite-plugin';

export default defineConfig((mode) => {
    return {
        plugins: [
            //tsconfigPaths(),
            laravel({
                input: [
                    'resources/js/index.jsx',
                    'resources/css/app.css',
                ],
                refresh: true,
            }),
            react(),
        ],
        define: {
            global: 'window',
        },
        resolve: {
            alias: [
                // {
                //     find: /^~(.+)/,
                //     replacement: path.join(process.cwd(), 'node_modules/$1')
                // },
                // {
                //     find: /^resources\/js(.+)/,
                //     replacement: path.join(process.cwd(), 'resources/js/$1')
                // },
                {
                    find: '@',
                    replacement: path.resolve(__dirname, 'resources/js')
                },
                {
                    find: '@larabiz',
                    replacement: path.resolve(__dirname, 'vendor/larabizcms/core/resources/js'),
                }
            ]
        },
        // server: {
        //     open: true,
        //     port: 3000
        // },
        // preview: {
        //     open: true,
        //     port: 3000
        // }
    }
});
