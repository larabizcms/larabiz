import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig((mode) => {
    return {
        plugins: [
            laravel({
                input: [
                    'resources/js/index.tsx',
                    'resources/css/app.css',
                ],
                refresh: {
                    paths: [
                        'resources/views/**',
                        'routes/**',
                        'packages/core/resources/views/**',
                    ],
                    config: { delay: 300 },
                },
            }),
            react(),
        ],
        define: {
            global: 'window',
        },
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: path.resolve(__dirname, 'resources/js')
                },
                {
                    find: '@larabiz',
                    replacement: path.resolve(__dirname, 'vendor/larabizcms/core/resources/js'),
                },
                {
                    find: /^\@modules\/([a-zA-Z0-9]+)\/(.+)/,
                    replacement: path.join(process.cwd(), 'modules/$1/resources/js/$2'),
                },
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
