// material-ui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
// project import
import NavGroup from './NavGroup';
import { useSelector } from 'react-redux';

export default function Navigation() {
    const { generalData } = useSelector((state: any) => state.setting);
    const MenuItems = generalData?.menu_left.items;

    const navGroups = MenuItems.map((item: any) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        }
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
}
