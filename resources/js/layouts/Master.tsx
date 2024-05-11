import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Master = (): JSX.Element => {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Master;
