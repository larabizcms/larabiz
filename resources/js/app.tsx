import React, { Suspense } from "react";
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { LinearProgress } from "@mui/material";
import router from '@/routes';
import ThemeCustomization from '@larabiz/themes';
import ScrollTop from '@larabiz/layouts/components/ScrollTop';

export default function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Suspense fallback={<LinearProgress />}>
                    <ThemeCustomization>
                        <ScrollTop>
                            <RouterProvider router={router} />
                        </ScrollTop>
                    </ThemeCustomization>
                </Suspense>
            </Provider>
        </React.StrictMode>
    );
}
