import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import CardContent from '@mui/material/CardContent';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
// project import
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';
import Avatar from '@/components/@extended/Avatar';
import MainCard from '@/components/MainCard';
import Transitions from '@/components/@extended/Transitions';

// assets
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import avatar1 from '@/assets/images/users/avatar-1.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/features/auth/authSlice';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }: any) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
            {value === index && children}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `profile-tab-${index}`,
        'aria-controls': `profile-tabpanel-${index}`
    };
}

export default function Profile() {
    const theme = useTheme<any>();
    const anchorRef = useRef<any>(null);
    const [open, setOpen] = useState(false);
    const { user } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const iconBackColorOpen = 'grey.100';

    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <ButtonBase
                sx={{
                    p: 0.25,
                    bgcolor: open ? iconBackColorOpen : 'transparent',
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'secondary.lighter' },
                    '&:focus-visible': { outline: `2px solid ${theme.palette.secondary.dark}`, outlineOffset: 2 }
                }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {user && (
                    <Stack direction="row" spacing={1.25} alignItems="center" sx={{ p: 0.5 }}>
                        <Avatar alt="profile user" src={avatar1} size="sm" />
                        <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                            {user.name}
                        </Typography>
                    </Stack>
                )}
            </ButtonBase>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 9]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions type="grow" position="top-right" in={open} {...TransitionProps}>
                        <Paper sx={{ boxShadow: theme.customShadows.z1, width: 290, minWidth: 240, maxWidth: { xs: 250, md: 290 } }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard elevation={0} border={false} content={false}>
                                    <CardContent sx={{ px: 2.5, pt: 3 }}>
                                        <Grid container justifyContent="space-between" alignItems="center">
                                            <Grid item>
                                                <Stack direction="row" spacing={1.25} alignItems="center">
                                                    <Avatar alt="profile user" src={avatar1} sx={{ width: 32, height: 32 }} />
                                                    <Stack>
                                                        {user && (
                                                            <Typography variant="h6">{user.name}</Typography>
                                                        )}
                                                        <Typography variant="body2" color="text.secondary">
                                                            UI/UX Designer
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item>
                                                <Tooltip title="Logout">
                                                    <IconButton size="large" sx={{ color: 'text.primary' }}
                                                        onClick={() => dispatch(logout())}>
                                                        <LogoutOutlined />
                                                    </IconButton>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </CardContent>

                                    <ProfileTab />

                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </Box>
    );
}

TabPanel.propTypes = { children: PropTypes.node, value: PropTypes.number, index: PropTypes.number, other: PropTypes.any };
