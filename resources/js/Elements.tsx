import { ElementProps } from "@larabiz/views/ElementBuilder";
import RootElements from "@larabiz/RootElements";

const Elements = (props: ElementProps, index: number): JSX.Element|null => {
    switch (props.config?.element) {
        // Custom templates
        default:
            return RootElements(props, index);
    }
}

export default Elements;
