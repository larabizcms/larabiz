import { styled, Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "../utils/theme/DefaultColors";
import { useSelector } from "react-redux";
import NotFound from "~/views/NotFound";

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
    const { user } = useSelector((state: any) => state.auth);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/admin-cp/login');
        }
    }, [navigate, user]);

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
