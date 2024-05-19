import React, { useState } from "react";
import {
    Box,
    Typography,
    Stack,
} from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";

import CustomTextField from "../../../components/forms/theme-elements/CustomTextField";
import { LoadingButton } from '@mui/lab';

interface forgotPasswordType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthForgotPassword = ({ title, subtitle, subtext }: forgotPasswordType) => {
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [email, setEmail] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFormSubmitting(true);
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
                <Stack mb={3}>
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor="username"
                            mb="5px"
                        >
                            Email
                        </Typography>
                        <CustomTextField
                            variant="outlined"
                            fullWidth type="email"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Box>

                </Stack>

                <Box>
                    <LoadingButton
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                        disabled={isFormSubmitting}
                        loading={isFormSubmitting}
                    >
                        Submit
                    </LoadingButton>
                </Box>

            </form>
            {subtitle}
        </>
    );
}

export default AuthForgotPassword;
