import React from "react";
import { Controller } from 'react-hook-form';
import { Typography } from '@mui/material';
import CustomTextField from './theme-elements/CustomTextField';
import {TextFieldProps} from '@mui/material/TextField';

type Props = TextFieldProps & {
    control: any,
    errors: any,
    name: string,
    id?: string,
    rules?: {},
}

export default function Text ({ ...props }: Props): React.JSX.Element {
    const { control, errors, name, label, id, rules } = props;

    const inputProps = {...props};

    delete inputProps.label;

    // if (validationErrors && validationErrors[name]) {
    //     inputProps.error = true;
    //     inputProps.helperText = validationErrors[name];
    // }

    if (errors && errors[name]) {
        inputProps.error = true;
        inputProps.helperText = errors[name].message;
    }

    return (
        <>
            <Typography variant="subtitle1"
                fontWeight={600} component="label" htmlFor={id || name} mb="5px">{label}</Typography>

            <Controller
                control={control}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }: any) => (
                    <CustomTextField
                        id={id || name}
                        variant="outlined"
                        fullWidth
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        {...inputProps}
                    />
                )}
                name={name}
            />
        </>
    );
};
