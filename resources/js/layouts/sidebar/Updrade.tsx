import React from "react";
import { Box, Typography, Button } from '@mui/material';
// import img1 from 'public/images/backgrounds/rocket.png';
import {Link} from "react-router-dom";

export const Upgrade = () => {
    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={2}
            sx={{ m: 3, p: 3, bgcolor: `${'primary.light'}`, borderRadius: '8px' }}
        >
            <>
                <Box>
                    <Typography variant="h6" mb={1}>Unlimited Access</Typography>
                    <Button color="primary" target="_blank" disableElevation href="#" variant="contained" aria-label="logout" size="small">
                        Upgrade
                    </Button>
                </Box>
                <Box mt="-35px">
                    <img alt="Remy Sharp" src='/images/backgrounds/rocket.png' width={100} height={100} />
                </Box>
            </>
        </Box>
    );
};
