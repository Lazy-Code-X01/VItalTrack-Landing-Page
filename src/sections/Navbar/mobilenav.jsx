import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { useUIContext } from "../../context/ui";



const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '5px 15px',

  [theme.breakpoints.down('md')] : {
    gap: '60%'
  },

  [theme.breakpoints.down('sm')] : {
    gap: '50%'
  }
}));

const SubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));

const TextWrapper = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
}));

const ImageWrapper = styled("Img")(({ src, theme }) => ({
  src: `(${src})`,
  width: "50px",
  height: "50px",
}));

function MobileNavBar() {
  const { setDrawerOpen } = useUIContext();

  return (
    <Wrapper>
      <SubSectionWrapper sx={{ gap: "20px" }}>
        <ImageWrapper src="/assets/logo.svg" alt="logo" />
        <TextWrapper>VITAL TRACKS</TextWrapper>
      </SubSectionWrapper>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
    </Wrapper>
  );
}

export default MobileNavBar;
