import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { store } from './store';
import { Provider } from 'react-redux';

(ReactDOM as any).createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
