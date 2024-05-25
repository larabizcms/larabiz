import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/hooks";
import { getGeneralData } from "@/features/setting/settingActions";

export default function MinimalLayout() {
    const { generalData } = useSelector((state: any) => state.setting);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!generalData) {
            dispatch(getGeneralData());
        }
    }, [generalData, dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
}
