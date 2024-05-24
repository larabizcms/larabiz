import React from "react";
import {Grid as MuiGrid} from "@mui/material";
import ElementBuilder from "layouts/ElementBuilder";

type Props = {
    config: {
        attributes: Array<any>;
        children: [];
    }
};

export default function Grid({ config }: Props) {
    return <MuiGrid {...config.attributes}>
        <ElementBuilder children={config.children}/>
    </MuiGrid>;
}
