import { useMediaQuery } from "@mui/material";
import React from "react";
import MobileNavBar from "./mobilenav";
import DesktopNavBar from "./desktopnav";
import { useTheme } from "@emotion/react";



function NavBar() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
        {matches ? <MobileNavBar matches={matches} /> : <DesktopNavBar matches={matches}/>}
    </>
  )
};



export default NavBar;
