import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";

import { authRoutes, appRoutes } from "@larabiz/routes";
import NotFound from "./views/NotFound";

const customRoutes: [] = [
    // Your custom routes here
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
