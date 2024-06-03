import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "@larabiz/layouts/components/container/PageContainer";
import MainCard from "@larabiz/layouts/components/MainCard";
import { Typography } from "@mui/material";

const NotFound = ({ title, message }: { title?: string, message?: string }): JSX.Element => {
    return (
        <PageContainer title={title || 'Page Not Found'} description={message || 'Page Not Found'}>
            <MainCard title={title || 'Page Not Found'} sx={{ maxWidth: '100%' }}>
                <Typography variant="body2">
                    {message || 'Sorry, the page you visited does not exist.'}<br />

                    <Link to="/admin-cp/dashboard" style={{ textDecoration: 'none' }}>Back to Dashboard</Link>
                </Typography>
            </MainCard>
        </PageContainer>
    );
};

export default NotFound;
