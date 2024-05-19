import React, { useState } from "react";
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Stack,
    Checkbox,
} from "@mui/material";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import CustomTextField from "~/components/forms/theme-elements/CustomTextField";
import { LoadingButton } from '@mui/lab';
import { useAppDispatch } from "~/hooks/hooks";
import { useForm } from "react-hook-form";
import { LoginData } from "~/service/types/AuthData";

interface loginType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();
    const { control, handleSubmit } = useForm<LoginData>();

    const submitForm = (data: LoginData) => {

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
                <Stack>
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
                    <Box mt="25px">
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor="password"
                            mb="5px"
                        >
                            Password
                        </Typography>
                        <CustomTextField
                            type="password"
                            variant="outlined"
                            fullWidth
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value);
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
                        disabled={isFormSubmitting}
                        loading={isFormSubmitting}
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
