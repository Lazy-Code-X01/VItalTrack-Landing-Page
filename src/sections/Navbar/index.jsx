import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React from "react";
import MobileNavBar from "./mobilenav";
import DesktopNavBar from "./desktopnav";



function NavBar() {
    const theme = createTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        {matches ? <MobileNavBar matches={matches} /> : <DesktopNavBar matches={matches}/>}
    </ThemeProvider>
  )
};



export default NavBar;
