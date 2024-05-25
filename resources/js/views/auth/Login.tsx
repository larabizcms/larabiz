import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './components/AuthLogin';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from '@/features/auth/authSlice';

export default function Login() {
    const { userToken } = useSelector<{ auth: any }, AuthState>((state) => state.auth);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate('/admin-cp/dashboard')
        }
    }, [navigate, userToken]);

    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Login</Typography>
                        <Typography component={Link} to="/admin-cp/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Don&apos;t have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <AuthLogin />
                </Grid>
            </Grid>
        </AuthWrapper>
    );
}
