import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { store } from './store';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Master from "./layouts/Master";
import Auth from "./layouts/Auth";
import ForgotPassword from "./views/auth/ForgotPassword";
import { LinearProgress } from "@mui/material";

const Login = React.lazy(() => import("./views/auth/Login"));
const NotFound = React.lazy(() => import("./views/NotFound"));
const Document = React.lazy(() => import("./views/api/Document"));
const Register = React.lazy(() => import("./views/auth/Register"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Page = React.lazy(() => import("./views/Page"));

const router = createBrowserRouter([
    {
        path: "/admin-cp",
        element: <Auth />,
        errorElement: <NotFound />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            }
        ],
    },
    {
        path: "/admin-cp",
        element: <Master />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/admin-cp",
                element: <Page uri={'dashboard'} />,
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

(ReactDOM as any).createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<LinearProgress />}>
                <RouterProvider router={router} />
            </Suspense>
        </Provider>
    </React.StrictMode>
);
