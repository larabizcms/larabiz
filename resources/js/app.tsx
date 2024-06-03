import React from "react";
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import { Provider } from 'react-redux';
import router from '@/routes';
import ThemeCustomization from '@larabiz/themes';
import ScrollTop from '@larabiz/layouts/components/ScrollTop';

export default function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <ThemeCustomization>
                    {/* Fix: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator... */}
                    {/* <Suspense fallback={<Loader />}> */}
                        <ScrollTop>
                            <RouterProvider router={router} />
                        </ScrollTop>
                    {/* </Suspense> */}
                </ThemeCustomization>
            </Provider>
        </React.StrictMode>
    );
}
