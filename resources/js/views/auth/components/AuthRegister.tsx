import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form'
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { RegisterFormType, registerUser } from '../../../features/auth/authActions';
import { useDispatch, useSelector  } from 'react-redux';
import type { AppDispatch } from "../../../store";
export const useAppDispatch = () => useDispatch<AppDispatch>();

interface registerType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

interface AuthState {
    loading: boolean;
    userInfo: any;
    error: any;
    success: boolean;
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
    const { loading, userInfo, error, success } = useSelector<{auth: any}, AuthState>(
        (state) => state.auth
    );

    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<RegisterFormType>();

    const submitForm = (data: RegisterFormType) => {
        dispatch(registerUser(data));
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <form onSubmit={handleSubmit(submitForm)}>
                <Box>
                    <Stack mb={3}>
                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                        <CustomTextField
                            id="name"
                            variant="outlined"
                            fullWidth
                            {...register("name")}
                        />
                        {error?.name && <p>{error.name.message}</p>}

                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                        <CustomTextField id="email" variant="outlined" fullWidth {...register("email")} />

                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                        <CustomTextField
                            id="password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            {...register("password")}
                        />
                    </Stack>
                    <LoadingButton
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                        loading={loading}
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
