import { Typography } from "@mui/material";
import React from "react";

const ErrorMessage = (errors: any) => {
    return errors.root ? (
        <Typography mb={3} color="error">
            {errors.root.message}
        </Typography>
    ) : null;
};

export default ErrorMessage;
