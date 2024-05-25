import { FormHelperText, Grid, Typography } from "@mui/material";
import React from "react";

const ErrorMessage = (errors: any) => {
    return errors.root ? (
        <Grid item xs={12}>
            <FormHelperText error>{errors.root.message}</FormHelperText>
        </Grid>
    ) : null;
};

export default ErrorMessage;
