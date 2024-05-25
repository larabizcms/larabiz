import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// project import
import AnimateButton from '@/components/@extended/AnimateButton';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import { useAppDispatch } from '@/hooks/hooks';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AuthState } from '@/features/auth/authSlice';
import { LoginData } from '@/features/types/AuthData';
import { mapErrorsToForm } from '@/hooks/helper';
import { loginUser } from '@/features/auth/authActions';
import Text from '@larabiz/components/forms/Text';
import ErrorMessage from '@/layouts/shared/ErrorMessage';
import Checkbox from '@larabiz/components/forms/Checkbox';
//import FirebaseSocial from './FirebaseSocial';

export default function AuthLogin() {
    const { loading } = useSelector<{ auth: any }, AuthState>((state) => state.auth);
    const { control, setError, setValue, formState: { errors }, handleSubmit } = useForm<LoginData>();
    const dispatch = useAppDispatch();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const submitForm = (data: LoginData) => {
        dispatch(loginUser(data)).then((res: any) => {
            mapErrorsToForm(res, setError);
            setValue("password", '');
        });
    };

    return (
        <>
            <form noValidate onSubmit={handleSubmit(submitForm)}>
                <Grid container spacing={3}>
                    <Text
                        label="Email"
                        name="email"
                        type="email"
                        control={control}
                        errors={errors}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        }}
                        placeholder='Enter email address'
                    />

                    <Text
                        fullWidth
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        control={control}
                        errors={errors}
                        name="password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    color="secondary"
                                >
                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </IconButton>
                            </InputAdornment>
                        }
                        placeholder="Enter password"
                        rules={{
                            required: "Password is required",
                        }}
                    />

                    <Checkbox
                        control={control}
                        errors={errors}
                        name="remember"
                        label="Keep me sign in"
                        color="primary"
                        size="small"
                        after={
                            <Link variant="h6" component={RouterLink} color="text.primary" to={'/admin-cp/forgot-password'}>
                                Forgot Password?
                            </Link>
                        }
                    />

                    <ErrorMessage errors={errors} />

                    <Grid item xs={12}>
                        <AnimateButton>
                            <Button disableElevation
                                disabled={loading}
                                fullWidth size="large" type="submit" variant="contained" color="primary">
                                Login
                            </Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider>
                            <Typography variant="caption"> Login with</Typography>
                        </Divider>
                    </Grid>
                    {/* <Grid item xs={12}>
                                <FirebaseSocial />
                            </Grid> */}
                </Grid>
            </form>
        </>
    );
}

AuthLogin.propTypes = {};
