import React, { Suspense } from "react";
import {
    createBrowserRouter
} from "react-router-dom";

import Master from "@/layouts/Master";
import Auth from "./layouts/Auth";

const Login = React.lazy(() => import("./views/auth/Login"));
const NotFound = React.lazy(() => import("./views/NotFound"));
const Document = React.lazy(() => import("./views/api/Document"));
const Register = React.lazy(() => import("./views/auth/Register"));
const Page = React.lazy(() => import("./views/Page"));

const routes = createBrowserRouter([
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
            }
        ],
    },
    {
        path: "/admin-cp",
        element: <Master />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/admin-cp/dashboard",
                element: <Page />,
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

// (ReactDOM as any).createRoot(document.getElementById("app")).render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <Suspense fallback={<LinearProgress />}>
//                 <RouterProvider router={router} />
//             </Suspense>
//         </Provider>
//     </React.StrictMode>
// );
