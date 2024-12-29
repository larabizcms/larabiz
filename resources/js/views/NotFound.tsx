import React from "react";
import PageContainer from "@admin/layouts/components/container/PageContainer";
import { Button, Container, Typography } from "@mui/material";

const NotFound = ({ title, message }: { title?: string, message?: string }): JSX.Element => {
    const isAdminCp = window.location.href.includes('admin-cp');
    const backUrl = isAdminCp ? '/admin-cp/dashboard' : '/';

    return (
        <PageContainer title={title || 'Page Not Found'} description={message || 'Page Not Found'}>
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h1" color="primary" gutterBottom>
                    {title || 'Page Not Found'}
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    {message || 'Sorry, the page you visited does not exist.'}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href={backUrl}
                    sx={{ mt: 3 }}
                >
                    Back to {isAdminCp ? 'Dashboard' : 'Home'}
                </Button>
            </Container>
        </PageContainer>
    );
};

export default NotFound;
