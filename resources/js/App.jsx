import React, { Suspense } from "react";
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { LinearProgress } from "@mui/material";
// project import
import router from './routes';
//import ThemeCustomization from 'themes';

//import ScrollTop from 'components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
    return (
        // <ThemeCustomization>
        //   <ScrollTop>
        //     <RouterProvider router={router} />
        //   </ScrollTop>
        // </ThemeCustomization>
        <Provider store={store}>
            <Suspense fallback={<LinearProgress />}>
                <RouterProvider router={router} />
            </Suspense>
        </Provider>
    );
}
