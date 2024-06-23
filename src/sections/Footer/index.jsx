import { Box, Typography, styled } from "@mui/material";
import React from "react";

const SectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px 150px",
  justifyItems: 'center',
  gap: '10px',

  [theme.breakpoints.down('md')] : {
    padding: "10px",
    alignItems: "center",
  }

}));

const MainSubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'space-between',
  

  [theme.breakpoints.down('md')] : {
    alignItems: "center",
    flexDirection: "column",
    gap: '20px'
  }
}));

const SubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')] : {
    alignItems: "center",
  }
}));

const LinkSubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: 'space-between',
}));

const SocialsSubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: '20px'
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

function Footer() {
  return (
    <SectionWrapper>
      <MainSubSectionWrapper sx={{gap: "20%"}}>
        <SubSectionWrapper sx={{gap: "20px"}}>
          <ImageWrapper src="/assets/logo.svg" alt="logo" />
          <TextWrapper>VITAL TRACKS</TextWrapper>
        </SubSectionWrapper>

        <LinkSubSectionWrapper sx={{gap: "50px"}}>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <TextWrapper sx={{ fontWeight: '300'}}>Features</TextWrapper>
          </a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <TextWrapper sx={{ fontWeight: '300'}}>Team</TextWrapper>
          </a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <TextWrapper sx={{ fontWeight: '300'}}>Contact</TextWrapper>
          </a>
        </LinkSubSectionWrapper>

        <SocialsSubSectionWrapper>
          <ImageWrapper src="/assets/icons/FB.png" alt="Facebook" sx={{width: "20px", height: "20px"}}/>
          <ImageWrapper src="/assets/icons/Twitter.png" alt="Twitter" sx={{width: "20px", height: "20px"}}/>
          <ImageWrapper src="/assets/icons/IG.png" alt="Instagram" sx={{width: "20px", height: "20px"}}/>
        </SocialsSubSectionWrapper>
      </MainSubSectionWrapper>
      <TextWrapper sx={{ textAlign: 'center', fontWeight: '300', fontSize: '1rem'}}>
       © 3nergy 2023 All right reserved.
      </TextWrapper>
    </SectionWrapper>
  );
}

export default Footer;
