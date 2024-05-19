import React, { useEffect } from "react";
import { baselightTheme } from "../utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "~/hooks/hooks";
import { getGeneralData } from "~/features/setting/settingActions";

export default function Auth() {
    const { generalData } = useSelector((state: any) => state.setting);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!generalData) {
            dispatch(getGeneralData());
        }
    }, [generalData, dispatch]);

    return (
        <ThemeProvider theme={baselightTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <Outlet />
        </ThemeProvider>
    );
}
