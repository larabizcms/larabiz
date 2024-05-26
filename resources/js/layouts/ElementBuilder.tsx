import React from "react";
//import DashboardCard from "@larabiz/components/elements/DashboardCard";
import Box from "@larabiz/components/elements/Box";
import Grid from "@larabiz/components/elements/Grid";
import Form from "@larabiz/components/elements/Form";
import Typography from "@larabiz/components/elements/Typography";
import EditorField from "@larabiz/components/elements/forms/EditorField";
import TextField from "@larabiz/components/elements/forms/TextField";
//import ImageField from "@larabiz/components/elements/forms/ImageField";
import Card from "@larabiz/components/elements/Card";

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
            return <Card config={config} key={index} {...props} />;
        case 'form':
            return <Form config={config} key={index} {...props} />;
        case 'text':
            return <Typography config={config} key={index} {...props} />;
        case 'text_field':
            return <TextField config={config} key={index} {...props} />;
        case 'editor_field':
            return <EditorField config={config} key={index} {...props} />;
            // case 'image_field':
            // return <ImageField config={config} key={index} {...props} />;
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
