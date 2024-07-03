import React from "react";
import NavBar from "../../sections/Navbar";
import { styled } from "@mui/material";
// import { Box, IconButton, Typography, styled, theme } from "@mui/material";


function PageLayout({children}) {
    return (
        <>
        <NavBar />
        {children}
        </>
    )
}

export default PageLayout;