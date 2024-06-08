import { ElementConfig, ElementProps, rootElements } from "@larabiz/elements";

const elements = (config: ElementConfig, index: number, props: ElementProps): JSX.Element|null => {
    switch (config.element) {
        // Custom templates
        default:
            return rootElements(config, index, props);
    }
}

export default elements;
