import React from 'react';
import { useEffect } from 'react';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from '@/menu-items';
import Loader from '@/components/Loader';
import Breadcrumbs from '@/components/@extended/Breadcrumbs';

import { handlerDrawerOpen, useGetMenuMaster } from '@/hooks/menu';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/hooks';
import { setUser } from '@/features/auth/authSlice';
import { useGetUserProfileQuery } from '@/features/auth/authService';
import { getGeneralData } from '@/features/setting/settingActions';

export default function Master() {
    const { menuMasterLoading } = useGetMenuMaster();
    const downXL = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));

    useEffect(() => {
        handlerDrawerOpen(!downXL);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [downXL]);

    const { userToken } = useSelector((state: any) => state.auth);
    const { setting } = useSelector((state: any) => state.setting);

    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();

    const { data } = useGetUserProfileQuery('userProfile', {
        pollingInterval: 900000,
    });

    useEffect(() => {
        if (data) {
            dispatch(setUser(data.data));
        }
    }, [data, dispatch]);

    useEffect(() => {
        if (!setting) {
            dispatch(getGeneralData());
        }
    }, []);

    useEffect(() => {
        if (!userToken) {
            navigate('/admin-cp/login');
        }
    }, [navigate, userToken]);

    if (menuMasterLoading) return <Loader />;

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <Drawer />
            <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Toolbar />
                {/* <Breadcrumbs navigation={navigation} title /> */}

                <Outlet />
            </Box>
        </Box>
    );
}
