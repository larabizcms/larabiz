import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import React from "react";

export default function Document(): React.JSX.Element {
    return <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />;
}
