import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import React from "react";

export default function LoadingPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </div>
    );
}
