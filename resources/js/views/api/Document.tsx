import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

interface Request {
    [k: string]: any;
}

const requestInterceptor = (req: Request) => (
    {
        ...req,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('lb_auth_token') as string).access_token,
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

    return <SwaggerUI
        url={import.meta.env.VITE_APP_URL + "/api/swagger.json"}
        requestInterceptor={requestInterceptor}
    />;
}
