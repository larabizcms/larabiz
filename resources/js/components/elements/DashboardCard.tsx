import React from "react";
import ElementBuilder from "layouts/ElementBuilder";
import DashboardCard from "../shared/DashboardCard";

type Props = {
    config: {
        attributes: Array<any>;
        children: [];
    }
};

export default function Grid({ config }: Props) {
    return <DashboardCard {...config.attributes}>
        <ElementBuilder children={config.children}/>
    </DashboardCard>;
}
