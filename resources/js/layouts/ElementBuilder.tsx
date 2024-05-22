import React from "react";
import DashboardCard from "~/components/elements/DashboardCard";
import Box from "~/components/elements/Box";
import Grid from "~/components/elements/Grid";
import Form from "~/components/elements/Form";
import Typography from "~/components/elements/Typography";
import EditorField from "~/components/elements/forms/Editor";

// const Box = React.lazy(() => import('@mui/material/Box'));
// const Grid = React.lazy(() => import('@mui/material/Grid'));

const Elements = (config: any, index: number) => {
    switch (config.element) {
        case 'box':
            return <Box config={config} key={index} />;
        case 'grid':
            return <Grid config={config} key={index} />;
        case 'card':
            return <DashboardCard config={config} key={index} />;
        case 'form':
            return <Form config={config} key={index} />;
        case 'text':
            return <Typography config={config} key={index} />;
        case 'editor':
            return <EditorField config={config} key={index} />;
        default:
            return null;
    }
}

const ElementBuilder = ({ children }: { children: [] }): JSX.Element => {
    return (<React.Fragment>
        {children.map((child: any, index: number) => {
            return Elements(child, index);
        })}
    </React.Fragment>);
};

export default ElementBuilder;
