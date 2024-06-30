'use client';
import { Box } from "@mui/material";
import React, { useEffect } from "react";

const RootLayoutFallback = () => {
    useEffect(() => {
        window.location.reload();
    }, []);

    return(
        <Box textAlign={'center'} mt={5}>
            <h1>Please wait, Loading...</h1>
        </Box>

    )
}
export default RootLayoutFallback;