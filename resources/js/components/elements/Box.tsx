import React from "react";
import {Box as MuiBox} from "@mui/material";
import ElementBuilder from "~/layouts/ElementBuilder";

type Props = {
    config: {
        attributes: Array<any>;
        children: [];
    }
};

export default function Box({ config }: Props) {
    return <MuiBox {...config.attributes}>
        <ElementBuilder children={config.children}/>
    </MuiBox>;
}
