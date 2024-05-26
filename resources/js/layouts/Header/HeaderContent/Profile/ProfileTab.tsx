import PropTypes from 'prop-types';
import { useState } from 'react';
import React from 'react';
// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import EditOutlined from '@ant-design/icons/EditOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/features/auth/authSlice';

export default function ProfileTab() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    const dispatch = useDispatch();

    return (
        <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
            {/* <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0, '/apps/profiles/user/personal')}>
                <ListItemIcon>
                    <EditOutlined />
                </ListItemIcon>
                <ListItemText primary="Edit Profile" />
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1, '/apps/profiles/account/basic')}>
                <ListItemIcon>
                    <UserOutlined />
                </ListItemIcon>
                <ListItemText primary="View Profile" />
            </ListItemButton>

            <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3, 'apps/profiles/account/personal')}>
                <ListItemIcon>
                    <ProfileOutlined />
                </ListItemIcon>
                <ListItemText primary="Social Profile" />
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4, '/apps/invoice/details/1')}>
                <ListItemIcon>
                    <WalletOutlined />
                </ListItemIcon>
                <ListItemText primary="Billing" />
            </ListItemButton> */}
            <ListItemButton selected={selectedIndex === 2}>
                <ListItemIcon>
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Logout" onClick={() => dispatch(logout())} />
            </ListItemButton>
        </List>
    );
}

ProfileTab.propTypes = { handleLogout: PropTypes.func };
