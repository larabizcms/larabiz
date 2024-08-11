import React from "react";
import { RouterProvider } from 'react-router-dom';
import { store } from '@local/store';
import { Provider } from 'react-redux';
import router from '@local/routes';
import ThemeCustomization from '@larabiz/themes';
import ScrollTop from '@larabiz/layouts/components/ScrollTop';
import { SnackbarProvider } from 'notistack';
import '@larabiz/i18n';

export default function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <ThemeCustomization>
                    {/* Fix: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator... */}
                    {/* <Suspense fallback={<Loader />}> */}
                    <SnackbarProvider maxSnack={3} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }} >
                        <ScrollTop>
                            <RouterProvider router={router} />
                        </ScrollTop>
                    </SnackbarProvider>
                    {/* </Suspense> */}
                </ThemeCustomization>
            </Provider>
        </React.StrictMode>
    );
}
