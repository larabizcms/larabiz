import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "@/components/container/PageContainer";

const NotFound = ({ title, message }: { title?: string, message?: string }): JSX.Element => {
    return (
        <PageContainer title={title || 'Page Not Found'} description={message || 'Page Not Found'}>
            <h1>{title || 'Page Not Found'}</h1>
            <p>
                {message || 'Page Not Found'}{" "}
                <Link to="/admin-cp">Back to Dashboard</Link>
            </p>
        </PageContainer>
    );
};

export default NotFound;
