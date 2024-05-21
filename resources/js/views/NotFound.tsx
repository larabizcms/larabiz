import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "~/components/container/PageContainer";

const NotFound = (): JSX.Element => {
    return (
        <PageContainer title={'Page Not Found'} description={'Page Not Found'}>
        <p>
            Whatever you were looking for isn't here.{" "}
            <Link to="/admin-cp">Back to Dashboard</Link>
        </p>
        </PageContainer>
    );
};

export default NotFound;
