import { FormHelperText, Grid } from "@mui/material";
import React from "react";

const ErrorMessage = (e: any) => {
    return e?.errors?.root ? (
        <Grid item xs={12}>
            <FormHelperText error>{e.errors.root.message}</FormHelperText>
        </Grid>
    ) : null;
};

export default ErrorMessage;
