import { ElementProps } from "@admin/views/ElementBuilder";
import RootElements from "@admin/RootElements";

const elements = (props: ElementProps, index: number): JSX.Element|null => {
    switch (props.config?.element) {
        // Custom templates
        default:
            return RootElements(props, index);
    }
}

export default elements;
