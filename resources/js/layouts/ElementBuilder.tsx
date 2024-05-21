import React from "react";
import DashboardCard from "~/components/shared/DashboardCard";
import {Box, Grid} from "@mui/material";

// const Box = React.lazy(() => import('@mui/material/Box'));
// const Grid = React.lazy(() => import('@mui/material/Grid'));

const Elements = (config: any, index: number) => {
    switch (config.element) {
        case 'box':
            return <Box {...config.attributes} key={index} />;
        case 'grid':
            return <Grid {...config.attributes} key={index} />;
        case 'card':
            return <DashboardCard {...config.attributes} key={index} />;
    }

    return null;
}

const ElementBuilder = ({ children }: { children: [] }): JSX.Element => {
    return (<React.Fragment>
        {children.map((child: any, index: number) => {
            return Elements(child, index);
        })}
    </React.Fragment>);
};

export default ElementBuilder;
