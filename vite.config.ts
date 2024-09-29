import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
import { collectModuleAssetsPaths } from './resources/js/vite-module-loader';
import { customWatchPlugin } from './resources/js/CustomHmr';
import tsconfigPaths from 'vite-tsconfig-paths';

async function getConfig() {
    const paths = [
        'resources/js/index.tsx',
        'resources/css/app.css',
    ];

    const allPaths = await collectModuleAssetsPaths(paths, path.join(__dirname, 'modules'));

    return defineConfig({
        optimizeDeps: {
            include: [
                '@emotion/react',
                '@emotion/styled',
                '@mui/material/Tooltip',
            ],
        },
        plugins: [
            laravel({
                input: allPaths,
                refresh: {
                    paths: [
                        ...refreshPaths,
                        'resources/views/**',
                        'resources/js/config.ts',
                        'routes/**',
                        'packages/**/resources/views/**/*.php',
                        'modules/**/resources/views/**/*.php',
                        'modules/**/module.config.js',
                    ],
                    config: { delay: 300 },
                },
            }),
            react(),
            customWatchPlugin(),
            tsconfigPaths(),
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
                    replacement: path.resolve(__dirname, 'packages/core/react'),
                },
                {
                    find: /^\@modules\/([a-zA-Z0-9]+)\/(.+)/,
                    replacement: path.join(process.cwd(), 'modules/$1/react/$2'),
                },
            ],
            preserveSymlinks: true,
        },
        server: {
            watch: {
                usePolling: true,
            }
        },
        build: {
            chunkSizeWarningLimit: 1300,
        },
    });
}

export default getConfig();
