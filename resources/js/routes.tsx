import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";

import Master from "@/layouts/Master";
import Auth from "./layouts/Auth";
import Media from "@larabiz/views/Media";
import Setting from "@larabiz/views/Setting";

const Login = React.lazy(() => import("./views/auth/Login"));
const NotFound = React.lazy(() => import("./views/NotFound"));
const Document = React.lazy(() => import("./views/api/Document"));
const Register = React.lazy(() => import("./views/auth/Register"));
const Page = React.lazy(() => import("@larabiz/views/Page"));

const routes = createBrowserRouter([
    {
        element: <Auth />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/admin-cp/login",
                element: <Login />,
            },
            {
                path: "/admin-cp/register",
                element: <Register />,
            }
        ],
    },
    {
        element: <Master />,
        //errorElement: <NotFound />,
        children: [
            {
                path: "/admin-cp/dashboard",
                element: <Page />,
            },
            {
                path: "/admin-cp/media",
                element: <Media />,
            },
            {
                path: "/admin-cp/settings/:page/:form",
                element: <Setting />,
            },
            {
                path: "/admin-cp/:page",
                element: <Page />,
            }
        ],
    },
    {
        path: "/admin-cp/api-documentation",
        element: <Document />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default routes;
