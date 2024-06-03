import React, { Suspense } from "react";
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import { Provider } from 'react-redux';
import router from '@/routes';
import ThemeCustomization from '@larabiz/themes';
import ScrollTop from '@larabiz/layouts/components/ScrollTop';
import Loader from "@larabiz/layouts/components/Loader";

export default function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <ThemeCustomization>
                    <Suspense fallback={<Loader />}>
                        <ScrollTop>
                            <RouterProvider router={router} />
                        </ScrollTop>
                    </Suspense>
                </ThemeCustomization>
            </Provider>
        </React.StrictMode>
    );
}
