import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import ElementBuilder from "layouts/ElementBuilder";
import ErrorMessage from "layouts/shared/ErrorMessage";

type Props = {
    config: {
        children: [];
        attributes: Array<any>;
    },
    title?: string
};

export default function Form({ config, title }: Props) {
    const { control, register, setError, setValue, formState: { errors }, handleSubmit } = useForm<any>();

    const submitForm = (data: any) => {

    };

    return <form onSubmit={handleSubmit(submitForm)} {...config.attributes}>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        <ErrorMessage errors={errors}/>

        <ElementBuilder children={config.children} register={register} setValue={setValue} errors={errors} />
    </form>;
}
