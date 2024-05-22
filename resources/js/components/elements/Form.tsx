import React from "react";
import ElementBuilder from "~/layouts/ElementBuilder";

type Props = {
    config: {
        children: [];
        attributes: Array<any>;
    }
};

export default function Form({ config }: Props) {
    return <form {...config.attributes}>
        <ElementBuilder children={config.children}/>
    </form>;
}
