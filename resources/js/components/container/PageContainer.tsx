// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from "react";

type Props = {
    description?: string;
    children: JSX.Element | JSX.Element[];
    title?: string;
};

const PageContainer = ({ title, description, children }: Props) => (
    <HelmetProvider>
        <div>
            <Helmet>
                <title>{title} - {"Larabiz"}</title>
                <meta name="description" content={description} />
            </Helmet>

            {/* <Breadcrumbs aria-label="breadcrumb">
                <Link component={RouterLink} underline="none" color="inherit" to="/admin-cp">
                    Dashboard
                </Link>

                <Link
                    component={RouterLink}
                    underline="none"
                    color="inherit"
                    to="/admin-cp/"
                >
                    Core
                </Link>
                <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs> */}

            {children}
        </div>
    </HelmetProvider>
);

export default PageContainer;
