import React from "react";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import { useSelector } from "react-redux";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
    const { generalData } = useSelector((state: any) => state.setting);
    const MenuItems = generalData?.menu_left.items;
    const pathDirect = window.location.pathname;

    return (
        <Box sx={{ px: 3 }}>
            <List sx={{ pt: 0 }} className="sidebarNav" component="div">
                {MenuItems && MenuItems.map((item: any) => {
                    // {/********SubHeader**********/}
                    if (item.subheader) {
                        return <NavGroup item={item} key={item.subheader} />;

                        // {/********If Sub Menu**********/}
                        /* eslint no-else-return: "off" */
                    } else {
                        return (
                            <NavItem
                                item={item}
                                key={item.key}
                                pathDirect={pathDirect}
                                onClick={toggleMobileSidebar}
                            />
                        );
                    }
                })}
            </List>
        </Box>
    );
};
export default SidebarItems;
