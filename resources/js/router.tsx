import React from "react";
import { Routes, Route, RouterProvider } from "react-router-dom";

import Master from "./layouts/Master";
import Home from "./views/Home";
import Auth from "./layouts/Auth";
import ForgotPassword from "./views/auth/ForgotPassword";

const Login = React.lazy(() => import("./views/auth/Login"));
const NotFound = React.lazy(() => import("./views/NotFound"));
const Document = React.lazy(() => import("./views/api/Document"));
const Register = React.lazy(() => import("./views/auth/Register"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));

export function Router(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Auth />}>
                <Route index element={<Home />} />
                <Route path="/admin-cp/login" element={<Login />} />
                <Route path="/admin-cp/register" element={<Register />} />
                <Route path="/admin-cp/forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="/" element={<Master />}>
                <Route path="/admin-cp" element={<Dashboard />} />
                <Route path="/admin-cp/api/documentation" element={<Document />} />
                <Route path="/admin-cp/:page" element={<Document />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
