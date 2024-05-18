import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import React from "react";
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
    // return <API
    //     apiDescriptionUrl={process.env.MIX_APP_URL + "/api/swagger.json"}
    //     router="hash"
    // />;
    return <SwaggerUI
        url={process.env.MIX_APP_URL + "/api/swagger.json"}
        requestInterceptor={requestInterceptor}
    />;
}
