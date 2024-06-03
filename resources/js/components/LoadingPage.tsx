import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import React from "react";

export default function LoadingPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
            <CircularProgress />
        </div>
    );
}
