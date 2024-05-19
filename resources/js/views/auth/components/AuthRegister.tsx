import React from 'react';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Stack } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import { registerUser } from '~/features/auth/authActions';
import { useSelector } from 'react-redux';
import { RegisterData } from '~/services/types/AuthData';
import { useAppDispatch } from '~/hooks/hooks';
import Text from '~/components/forms/Text';
import { mapErrorsToForm } from '~/hooks/helper';
import { AuthState } from '~/features/auth/authSlice';
import ErrorMessage from '~/layouts/shared/ErrorMessage';

interface Props {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: Props) => {
    const { loading } = useSelector<{ auth: any }, AuthState>((state) => state.auth);

    //const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();
    const { control, handleSubmit, setError, setValue, formState: { errors } } = useForm<RegisterData>();

    const submitForm = (data: RegisterData) => {
        dispatch(registerUser(data)).then((res) => {
            if (res.payload.success) {
                //navigate("/admin-cp/login");

                return false;
            }

            mapErrorsToForm(res, setError);
            setValue("password", '');
            setValue("password_confirmation", '');
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
                <Box>
                    <Stack mb={3}>
                        <Box>
                            <Text
                                control={control}
                                errors={errors}
                                name="name"
                                label="Name"
                                rules={{
                                    required: 'Name is required',
                                }}
                            />
                        </Box>
                        <Box mt="25px">
                            <Text
                                control={control}
                                errors={errors}
                                name="email"
                                label="Email Address"
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address"
                                    }
                                }}
                            />
                        </Box>
                        <Box mt="25px">
                            <Text
                                control={control}
                                errors={errors}
                                name="password"
                                label="Password"
                                type="password"
                                rules={{
                                    required: 'Password is required',
                                }}
                            />
                        </Box>
                        <Box mt="25px">
                            <Text
                                control={control}
                                errors={errors}
                                name="password_confirmation"
                                label="Confirm Password"
                                type="password"
                                rules={{
                                    required: 'Password is required',
                                }}
                            />
                        </Box>
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
