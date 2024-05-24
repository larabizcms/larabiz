import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';
import laravel from 'laravel-vite-plugin';

export default defineConfig((mode) => {
    return {
        plugins: [
            laravel({
                input: [
                    'resources/js/index.tsx',
                    'resources/css/app.css',
                ],
                refresh: true,
            }),
            react(),
            jsconfigPaths()
        ],
        define: {
            global: 'window',
        },
        resolve: {
            alias: [
                {
                    find: /^~(.+)/,
                    replacement: path.join(process.cwd(), 'node_modules/$1')
                },
                {
                    find: /^resources\/js(.+)/,
                    replacement: path.join(process.cwd(), 'resources/js/$1')
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
