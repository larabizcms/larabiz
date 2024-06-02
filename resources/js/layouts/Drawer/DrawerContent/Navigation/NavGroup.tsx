import PropTypes from 'prop-types';
// material-ui
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
// project import
import NavItem from './NavItem';
import { useGetMenuMaster } from '@/hooks/menu';

export default function NavGroup({ item }: any) {
    const { menuMaster } = useGetMenuMaster();
    const drawerOpen = (menuMaster as any).isDashboardDrawerOpened;

    const navCollapse = item.children?.map((menuItem : any) => {
        switch (menuItem.type) {
            // case 'collapse':
            //     return (
            //         <Typography key={menuItem.key} variant="caption" color="error" sx={{ p: 2.5 }}>
            //             collapse - only available in paid version
            //         </Typography>
            //     );
            case 'item':
                return <NavItem key={menuItem.key} item={menuItem} level={1} />;
            default:
                return (
                    <Typography key={menuItem.key} variant="h6" color="error" align="center">
                        Fix - Group Collapse or Items
                    </Typography>
                );
        }
    });

    return (
        <List
            subheader={
                item.title &&
                drawerOpen && (
                    <Box sx={{ pl: 3, mb: 1.5 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {item.title}
                        </Typography>
                        {/* only available in paid version */}
                    </Box>
                )
            }
            sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
        >
            {navCollapse}
        </List>
    );
}

NavGroup.propTypes = { item: PropTypes.object };
