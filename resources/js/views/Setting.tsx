import PageContainer from "@/components/container/PageContainer";
import { Grid, Icon } from "@mui/material";
import React from "react";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import MainCard from "@/components/MainCard";
import http from "@/http-common";
import { useParams } from "react-router-dom";
import ElementBuilder from "@larabiz/views/ElementBuilder";
import Form from "@larabiz/components/elements/Form";
import { LoadingButton } from "@mui/lab";

export default function Setting() {
    const { page, form } = useParams();
    const [settings, setSettings] = React.useState<[]>();

    React.useEffect(() => {
        http.get(`/admin/settings?page=${page}&form=${form}`).then((res) => {
            setSettings(res.data.data);
        });
    }, [page, form]);

    if (!settings) {
        return null;
    }

    return (
        <PageContainer title={'title'} description={'description'}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <MainCard title={'Menus'}>
                        <List
                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>email</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Sent mail" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </List>
                    </MainCard>
                </Grid>

                <Grid item xs={9}>
                    <MainCard>
                        <Form
                            config={{ action: `/admin/settings`, children: settings, attributes: { method: 'PUT' } }}
                        >

                    </Form>
                    </MainCard>
                </Grid>
            </Grid>
        </PageContainer>
    );
};
