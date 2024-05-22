import React from "react";
import ElementBuilder from "~/layouts/ElementBuilder";
import BlankCard from "../shared/BlankCard";

type Props = {
    config: {
        attributes: Array<any>;
        children: [];
    }
};

export default function Grid({ config }: Props) {
    return <BlankCard {...config.attributes}>
        <ElementBuilder children={config.children}/>
    </BlankCard>;
}
