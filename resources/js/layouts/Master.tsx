import { styled, Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "../utils/theme/DefaultColors";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileQuery } from "~/services/auth/authService";
import { setUser } from "~/features/auth/authSlice";
import { getGeneralData } from "~/features/setting/settingActions";
import { useAppDispatch } from "~/hooks/hooks";

const MainWrapper = styled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    width: "100%",
}));

const PageWrapper = styled("div")(() => ({
    display: "flex",
    flexGrow: 1,
    paddingBottom: "60px",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "transparent",
}));

export default function Master() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const { userToken } = useSelector((state: any) => state.auth);
    const { generalData } = useSelector((state: any) => state.setting);

    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();
    //const appDispatch = useAppDispatch();

    const { data } = useGetUserProfileQuery('userProfile', {
        pollingInterval: 900000,
    });

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data, dispatch]);

    useEffect(() => {
        if (!generalData) {
            dispatch(getGeneralData());
        }
    }, [generalData, dispatch, userToken]);

    useEffect(() => {
        if (!userToken) {
            navigate('/admin-cp/login');
        }
    }, [navigate, userToken]);

    return (
        <ThemeProvider theme={baselightTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MainWrapper className="mainwrapper">
                {/* ------------------------------------------- */}
                {/* Sidebar */}
                {/* ------------------------------------------- */}
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    isMobileSidebarOpen={isMobileSidebarOpen}
                    onSidebarClose={() => setMobileSidebarOpen(false)}
                />
                {/* ------------------------------------------- */}
                {/* Main Wrapper */}
                {/* ------------------------------------------- */}
                <PageWrapper className="page-wrapper">
                    {/* ------------------------------------------- */}
                    {/* Header */}
                    {/* ------------------------------------------- */}
                    <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} setSidebarOpen={() => setSidebarOpen(!isSidebarOpen)} />
                    {/* ------------------------------------------- */}
                    {/* PageContent */}
                    {/* ------------------------------------------- */}
                    <Container
                        sx={{
                            paddingTop: "20px",
                            maxWidth: "1200px",
                        }}
                    >
                        {/* ------------------------------------------- */}
                        {/* Page Route */}
                        {/* ------------------------------------------- */}
                        <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
                            <Outlet />
                        </Box>
                        {/* ------------------------------------------- */}
                        {/* End Page */}
                        {/* ------------------------------------------- */}
                    </Container>
                </PageWrapper>
            </MainWrapper>
        </ThemeProvider>
    );
}
