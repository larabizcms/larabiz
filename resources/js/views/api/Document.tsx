import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

// import { API } from "@stoplight/elements";
// import '@stoplight/elements/styles.min.css';

interface Request {
    [k: string]: any;
}

const requestInterceptor = (req: Request) => (
    {
        ...req,
        headers: {
            Accept: 'application/json'
        }
    }
);

export default function Document(): React.JSX.Element {
    const { userToken } = useSelector((state: any) => state.auth);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!userToken) {
            navigate('/admin-cp/login');
        }
    }, [navigate, userToken]);

    // return <API
    //     apiDescriptionUrl={process.env.MIX_APP_URL + "/api/swagger.json"}
    //     router="hash"
    // />;
    return <SwaggerUI
        url={process.env.MIX_APP_URL + "/api/swagger.json"}
        requestInterceptor={requestInterceptor}
    />;
}
