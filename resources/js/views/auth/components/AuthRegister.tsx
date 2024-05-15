import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import AuthService from '../../../service/Auth.service';
import { LoadingButton } from '@mui/lab';

interface registerType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFormSubmitting(true);

        // AuthService.register({ email: email, password: password })
        //     .then((response) => {
        //         navigate("/admin-cp");
        //     })
        //     .catch((e) => {
        //         setError(e.response.data.message);
        //         setIsFormSubmitting(false);
        //     });
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <form onSubmit={handleSubmit}>
                <Box>
                    <Stack mb={3}>
                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                        <CustomTextField id="name" variant="outlined" fullWidth />

                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                        <CustomTextField id="email" variant="outlined" fullWidth />

                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                        <CustomTextField id="password" variant="outlined" fullWidth />
                    </Stack>
                    <LoadingButton
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                        loading={isFormSubmitting}
                    >
                        Sign Up
                    </LoadingButton>
                </Box>
            </form>

            {subtitle}
        </>
    )
};

export default AuthRegister;
