// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from "react";
import { Grid, Typography } from '@mui/material';
import MainCard from '../MainCard';

type Props = {
    description?: string;
    children: JSX.Element | JSX.Element[];
    title?: string;
    showTitle?: boolean;
};

const PageContainer = ({ title, description, children, showTitle = true }: Props) => (
    <HelmetProvider>
        <div>
            <Helmet>
                <title>{title} - {"Larabiz"}</title>
                <meta name="description" content={description} />
            </Helmet>

            <MainCard border={false} sx={{ mb: 3, bgcolor: 'transparent' }} content={false}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                    {/* <Grid item>
                        <MuiBreadcrumbs aria-label="breadcrumb">
                            <Typography component={Link} to="/" color="textSecondary" variant="h6" sx={{ textDecoration: 'none' }}>
                            Home
                            </Typography>

                            <Typography component={Link} to={document.location.pathname} variant="h6" sx={{ textDecoration: 'none' }} color="textSecondary">
                                {main.title}
                            </Typography>

                            <Typography variant="subtitle1" color="textPrimary">
        {itemTitle}
      </Typography>
                        </MuiBreadcrumbs>
                        </Grid> */}

                    {showTitle && (
                        <Grid item sx={{ mt: 2 }}>
                        <Typography variant="h5">{title}</Typography>
                    </Grid>
                    )}
                </Grid>
            </MainCard>

            {children}
        </div>
    </HelmetProvider>
);

export default PageContainer;
