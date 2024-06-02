import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "@/components/container/PageContainer";
import MainCard from "@/components/MainCard";
import { Typography } from "@mui/material";

const NotFound = ({ title, message }: { title?: string, message?: string }): JSX.Element => {
    return (
        <PageContainer title={title || 'Page Not Found'} description={message || 'Page Not Found'}>
            <MainCard title={title || 'Page Not Found'} sx={{ maxWidth: '100%' }}>
                <Typography variant="body2">
                    {message || 'Page Not Found'}{" "}
                    <Link to="/admin-cp/dashboard">Back to Dashboard</Link>
                </Typography>
            </MainCard>
        </PageContainer>
    );
};

export default NotFound;
