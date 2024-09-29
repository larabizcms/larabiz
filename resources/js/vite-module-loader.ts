import fs from 'fs/promises';
import path from 'path';

const lowerize = (obj: { [key: string]: any }) =>
    Object.keys(obj).reduce((acc: { [key: string]: any }, k) => {
        acc[k.toLowerCase()] = obj[k];
        return acc;
    },
    {}
);

export async function collectModuleAssetsPaths(configs: string[], modulesPath: string) {
    const moduleStatusesPath = path.join(modulesPath, 'statuses.json');

    try {
        // Read module statuses.json
        const moduleStatusesContent = await fs.readFile(moduleStatusesPath, 'utf-8');
        const moduleStatuses = lowerize(JSON.parse(moduleStatusesContent));

        // Read module directories
        const moduleDirectories = await fs.readdir(modulesPath);

        for (const moduleDir of moduleDirectories) {
            if (moduleDir === '.DS_Store') {
                // Skip .DS_Store directory
                continue;
            }

            // Check if the module is enabled (status is true)
            if (moduleStatuses[moduleDir] === true) {
                const viteConfigPath = path.join(modulesPath, moduleDir, 'module.config.js');

                try {
                    await fs.access(viteConfigPath);

                    // Import the module-specific Vite configuration
                    const moduleConfig = await import(viteConfigPath);

                    if (moduleConfig.config.paths && Array.isArray(moduleConfig.config.paths)) {
                        configs.push(...moduleConfig.config.paths);
                    }
                } catch (error) {
                    // vite.config.js does not exist, skip this module
                    // console.error(`Error reading module configuration: ${error}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error reading module statuses or module configurations: ${error}`);
    }

    return configs;
}
