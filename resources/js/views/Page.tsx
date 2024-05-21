import { Breadcrumbs, LinearProgress, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from '~/components/container/PageContainer';
import http from '~/http-common';
import NotFound from './NotFound';

export default function Page({ uri }: { uri?: string }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [hasError, setHasError] = useState(false);
    const location = useLocation();

    useEffect(() => {
        uri = uri ? uri : location.pathname.replace('/admin-cp/', '');
        setLoading(true);
        setHasError(false);

        http.get(`/admin/pages/${uri}`).then((res) => {
            setTitle(res.data.data.title);
            setDescription(res.data.data.description);
            setLoading(false);
        }).catch(() => {
            setHasError(true);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [location.pathname]);

    if ((!title || loading) && !hasError) {
        return <LinearProgress />;
    }

    if (hasError) {
        return <NotFound />;
    }

    return (
        <PageContainer title={title} description={description}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="none" color="inherit" href="/admin-cp">
                    MUI
                </Link>
                <Link
                    underline="none"
                    color="inherit"
                    href="/admin-cp/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>

            <h1>Page: {uri}</h1>
        </PageContainer>
    );
}
