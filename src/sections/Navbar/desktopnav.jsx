import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography, styled } from "@mui/material";
import SigninButton from "../../components/signinButton";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '15px 50px',
  alignItems: 'center'

}));

const SubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  // [theme.breakpoints.down("md")]: {
  //   alignItems: "center",
  // },
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

const LinkSubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: 'space-between',
}));



function DesktopNavBar() {

  return (
    <Wrapper>
      <SubSectionWrapper sx={{ gap: "20px" }}>
        <ImageWrapper src="/assets/logo.svg" alt="logo" />
        <TextWrapper>VITAL TRACKS</TextWrapper>
      </SubSectionWrapper>

      <LinkSubSectionWrapper sx={{gap: "50px"}}>
          <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
          <TextWrapper sx={{ fontWeight: '300'}}>Features</TextWrapper>
          </Link>
          <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
          <TextWrapper sx={{ fontWeight: '300'}}>Team</TextWrapper>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <TextWrapper sx={{ fontWeight: '300'}}>Contact</TextWrapper>
          </Link>
        </LinkSubSectionWrapper>

        <SigninButton />
    </Wrapper>
  )
};



export default DesktopNavBar;
