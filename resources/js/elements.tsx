import { ElementProps } from "@larabiz/views/ElementBuilder";
import RootElements from "@larabiz/RootElements";

const elements = (props: ElementProps, index: number): JSX.Element|null => {
    switch (props.config?.element) {
        // Custom templates
        default:
            return RootElements(props, index);
    }
}

export default elements;
