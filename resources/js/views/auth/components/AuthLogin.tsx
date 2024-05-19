import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Stack,
    Checkbox,
} from "@mui/material";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import { useAppDispatch } from "~/hooks/hooks";
import { useForm } from "react-hook-form";
import { LoginData } from "~/service/types/AuthData";
import { loginUser } from "~/features/auth/authActions";
import { useSelector } from "react-redux";
import { mapErrorsToForm } from "~/hooks/helper";
import Text from "~/components/forms/Text";
import { AuthState } from "~/features/auth/authSlice";

interface loginType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    const { loading, success, user } = useSelector<{ auth: any }, AuthState>((state) => state.auth);
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();
    const { control, setError, setValue, formState: { errors }, handleSubmit } = useForm<LoginData>();

    const submitForm = (data: LoginData) => {
        dispatch(loginUser(data)).then((res: any) => {
            if (success) {
                // set token
                localStorage.setItem("lb_auth_token", res.data.token);
                //console.log(res.data.token);

                // redirect
                //navigate("/admin-cp");
                return false;
            }

            mapErrorsToForm(res, setError);

            setValue("password", '');
        });
    };

    useEffect(() => {
        if (user) {
            navigate('/admin-cp')
        }
    }, [navigate, user]);

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <form onSubmit={handleSubmit(submitForm)}>
                <Stack>
                    <Box>
                        <Text
                            label="Email"
                            name="email"
                            control={control} errors={errors}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            }}
                        />
                    </Box>

                    <Box mt="25px">
                        <Text
                            label="Password"
                            name="password"
                            type="password"
                            control={control}
                            errors={errors}
                            rules={{
                                required: "Password is required",
                            }}
                        />
                    </Box>

                    <Stack
                        justifyContent="space-between"
                        direction="row"
                        alignItems="center"
                        my={2}
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Remeber this Device"
                            />
                        </FormGroup>
                        <Typography
                            fontWeight="500"
                            sx={{
                                textDecoration: "none",
                                color: "primary.main",
                            }}
                        >
                            <Link to={'/admin-cp/forgot-password'}>Forgot Password ?</Link>
                        </Typography>
                    </Stack>
                </Stack>

                <Box>
                    <LoadingButton
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                        disabled={loading}
                        loading={loading}
                    >
                        Sign In
                    </LoadingButton>
                </Box>

            </form>
            {subtitle}
        </>
    );
}

export default AuthLogin;
