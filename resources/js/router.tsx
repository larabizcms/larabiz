import React from "react";
import { Routes, Route } from "react-router-dom";

import Master from "./layouts/Master";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Document from "./views/api/Document";
import Register from "./views/auth/Register";
import Dashboard from "./views/Dashboard";
import Auth from "./layouts/Auth";

const Login = React.lazy(() => import("./views/auth/Login"));

export function Router(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Auth />}>
                <Route index element={<Home />} />
                <Route path="/admin-cp/login" element={<Login />} />
                <Route path="/admin-cp/register" element={<Register />} />
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
