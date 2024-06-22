import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
//import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
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
                        'packages/**/resources/*.php',
                        'packages/**/src/**/*.php',
                        'resources/js/app.tsx',
                        'modules/**/*.php',
                        'modules/**/resources/views/**',
                    ],
                    config: { delay: 300 },
                },
            }),
            react(),
            //tsconfigPaths(),
        ],
        define: {
            global: 'window',
        },
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.mjs', '.css', '.scss'],
            alias: [
                {
                    find: '@local',
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
            ],
            preserveSymlinks: true,
        },
        server: {
            watch: {
                usePolling: true,
            }
        },
    }
});
