import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { authRoutes, appRoutes } from "@larabiz/routes";
import NotFound from "./views/NotFound";

import ecommerceRouter from "@modules/ecommerce/routes";
import themeRouter from "../../themes/landing-page/src/routes";

const customRoutes: RouteObject[] = [
    ...ecommerceRouter,
    ...themeRouter,
];

const routes = createBrowserRouter([
    ...authRoutes,
    ...appRoutes,
    ...customRoutes,
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default routes;
