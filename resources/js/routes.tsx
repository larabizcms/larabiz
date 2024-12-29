import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { authRoutes, appRoutes } from "@admin/routes";
import NotFound from "./views/NotFound";

const customRoutes: RouteObject[] = [
    //
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
