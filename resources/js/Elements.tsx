import RootElements, { ElementConfig, ElementProps } from "@larabiz/RootElements";

const Elements = (config: ElementConfig, index: number, props: ElementProps): JSX.Element|null => {
    switch (config.element) {
        // Custom templates
        default:
            return RootElements(config, index, props);
    }
}

export default Elements;
