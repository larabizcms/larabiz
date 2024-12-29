import path from "path";
import { PluginOption } from "vite";

export function customWatchPlugin(): PluginOption {
    return {
        name: 'custom-watch-plugin',
        configureServer(server: any) {
            // Add files or directories to watch
            server.watcher.add(path.resolve(__dirname, '../../modules/**/react/**/*'));
            server.watcher.add(path.resolve(__dirname, '../../vendor/larabizcms/premium/react/**/*'));
            server.watcher.on('change', (file: any) => {
                // Custom actions when files change
            });
        }
    };
}

export function CustomHmr(): PluginOption {
    return {
        name: 'custom-hmr',
        enforce: 'post',
        handleHotUpdate({ file, server }: any) {
            console.log('file', file);

            if (file.endsWith('.json')) {
                console.log('reloading json file...');

                server.ws.send({
                    type: 'full-reload',
                    path: '*'
                });
            }
        },
    }
}
