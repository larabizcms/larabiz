import React, { Suspense } from "react";
import { RouterProvider } from 'react-router-dom';
import { store } from '../../packages/core/resources/js/store';
import { Provider } from 'react-redux';
import { LinearProgress } from "@mui/material";
import router from './routes';
import ThemeCustomization from '@/themes';
import ScrollTop from '@/components/ScrollTop';

export default function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<LinearProgress />}>
                <ThemeCustomization>
                    <ScrollTop>
                        <RouterProvider router={router} />
                    </ScrollTop>
                </ThemeCustomization>
            </Suspense>
        </Provider>
    );
}
