import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/hooks";
import { getGeneralData } from "@larabiz/features/setting/settingActions";

export default function MinimalLayout() {
    const { setting } = useSelector((state: any) => state.setting);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!setting) {
            dispatch(getGeneralData());
        }
    }, [setting, dispatch]);

    return (
        <>
            <Outlet />
        </>
    );
}
