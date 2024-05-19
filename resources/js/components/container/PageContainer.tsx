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
                <title>{title} - {process.env.MIX_APP_NAME || "Larabiz"}</title>
                <meta name="description" content={description} />
            </Helmet>
            {children}
        </div>
    </HelmetProvider>
);

export default PageContainer;
