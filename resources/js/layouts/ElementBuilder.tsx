import React from "react";
import DashboardCard from "~/components/elements/DashboardCard";
import Box from "~/components/elements/Box";
import Grid from "~/components/elements/Grid";
import Form from "~/components/elements/Form";
import Typography from "~/components/elements/Typography";
import EditorField from "~/components/elements/forms/Editor";

// const Box = React.lazy(() => import('@mui/material/Box'));
// const Grid = React.lazy(() => import('@mui/material/Grid'));

type Props = {
    children: [],
    register?: Function,
    setValue?: Function,
    control?: any,
    errors?: any,
}

const Elements = (config: any, index: number, props: Props) => {
    switch (config.element) {
        case 'box':
            return <Box config={config} key={index} {...props} />;
        case 'grid':
            return <Grid config={config} key={index} {...props} />;
        case 'card':
            return <DashboardCard config={config} key={index} {...props} />;
        case 'form':
            return <Form config={config} key={index} {...props} />;
        case 'text':
            return <Typography config={config} key={index} {...props} />;
        case 'editor':
            return <EditorField config={config} key={index} {...props} />;
        default:
            return null;
    }
}

const ElementBuilder = (props: Props): JSX.Element => {
    const { children } = props;

    return (<React.Fragment>
        {children.map((child: any, index: number) => {
            return Elements(child, index, props);
        })}
    </React.Fragment>);
};

export default ElementBuilder;
