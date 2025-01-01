import React from "react";
import { RouterProvider } from 'react-router-dom';
import { store } from '@local/store';
import { Provider } from 'react-redux';
import router from '@local/routes';
import ScrollTop from '@admin/layouts/components/ScrollTop';
import { SnackbarProvider } from 'notistack';
import AppProvider from "@admin/providers/AppProvider";
import LarabizProvider from "@admin/LarabizProvider";
import config from "./config";

export default function App() {
    return (
        <LarabizProvider apiConfig={{ apiBaseUrl: config.apiBaseUrl }} store={store}>
            <Provider store={store}>
                <SnackbarProvider maxSnack={3} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} >
                    <AppProvider>
                        <ScrollTop>
                            <RouterProvider router={router} />
                        </ScrollTop>
                    </AppProvider>
                </SnackbarProvider>
            </Provider>
        </LarabizProvider>
    );
}
