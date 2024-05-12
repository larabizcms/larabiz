import React from "react";
import { Routes, Route } from "react-router-dom";

import Master from "./layouts/Master";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/user/Dashboard";
import NotFound from "./views/NotFound";
import Document from "./views/api/Document";

export function App(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Master />}>
                <Route index element={<Home />} />
                <Route path="/admin-cp/login" element={<Login />} />
                <Route path="/admin-cp/register" element={<Register />} />
                {/* Authenticated */}
                <Route path="/admin-cp/dashboard" element={<Dashboard />} />
                <Route path="/admin-cp/api/documentation" element={<Document />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
