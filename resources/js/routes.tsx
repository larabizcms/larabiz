import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";

import { authRoutes, appRoutes } from "@larabiz/routes";
import NotFound from "./views/NotFound";

const routes = createBrowserRouter([
    ...authRoutes,
    ...appRoutes,
    // custom routes
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default routes;
