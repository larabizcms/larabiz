import React from "react";
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Stack,
    Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import { useAppDispatch } from "~/hooks/hooks";
import { useForm } from "react-hook-form";
import { LoginData } from "~/services/types/AuthData";
import { loginUser } from "~/features/auth/authActions";
import { useSelector } from "react-redux";
import { mapErrorsToForm } from "~/hooks/helper";
import Text from "~/components/forms/Text";
import { AuthState } from "~/features/auth/authSlice";
import ErrorMessage from "~/layouts/shared/ErrorMessage";

interface loginType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    const { loading } = useSelector<{ auth: any }, AuthState>((state) => state.auth);
    const { control, setError, setValue, formState: { errors }, handleSubmit } = useForm<LoginData>();
    const dispatch = useAppDispatch();

    const submitForm = (data: LoginData) => {
        dispatch(loginUser(data)).then((res: any) => {
            mapErrorsToForm(res, setError);
            setValue("password", '');
        });
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <ErrorMessage errors={errors}/>

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
