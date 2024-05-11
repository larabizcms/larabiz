import React from "react";
import { Routes, Route } from "react-router-dom";

import Master from "./layouts/Master";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/user/Dashboard";
import NotFound from "./views/NotFound";

export function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Master />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Authenticated */}
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
