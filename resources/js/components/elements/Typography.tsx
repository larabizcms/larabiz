import React from "react";
import {Typography as MuiTypography} from "@mui/material";
import ElementBuilder from "layouts/ElementBuilder";

type Props = {
    config: {
        attributes: Array<any>;
        children: [];
        text: string;
    }
};

export default function Typography({ config }: Props) {
    return <MuiTypography {...config.attributes}>
        {config.text}
    </MuiTypography>;
}
