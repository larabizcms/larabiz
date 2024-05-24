import React, { useEffect } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
// components
import PageContainer from "../../components/container/PageContainer";
import Logo from "../../layouts/shared/logo/Logo";
import AuthLogin from "./components/AuthLogin";
import { useSelector } from "react-redux";
import { AuthState } from "features/auth/authSlice";

const Login = () => {
    const { userToken } = useSelector<{ auth: any }, AuthState>((state) => state.auth);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate('/admin-cp')
        }
    }, [navigate, userToken]);

    return (
        <PageContainer title="Login" description="this is Login page">
            <Box
                sx={{
                    position: "relative",
                    "&:before": {
                        content: '""',
                        background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
                        backgroundSize: "400% 400%",
                        animation: "gradient 15s ease infinite",
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        opacity: "0.3",
                    },
                }}
            >
                <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    sx={{ height: "100vh" }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={4}
                        xl={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Card
                            elevation={9}
                            sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
                        >
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <AuthLogin
                                subtext={
                                    <Typography
                                        variant="subtitle1"
                                        textAlign="center"
                                        color="textSecondary"
                                        mb={1}
                                    >
                                        Your Social Campaigns
                                    </Typography>
                                }
                                subtitle={
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="center"
                                        mt={3}
                                    >
                                        <Typography
                                            color="textSecondary"
                                            variant="h6"
                                            fontWeight="500"
                                        >
                                            New to Modernize?
                                        </Typography>
                                        <Typography
                                            fontWeight="500"
                                            sx={{
                                                textDecoration: "none",
                                                color: "primary.main",
                                            }}
                                        >
                                            <Link to="/admin-cp/register">Create an account</Link>
                                        </Typography>
                                    </Stack>
                                }
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    );
};
export default Login;
