import React from "react";
import { Box, styled } from "@mui/material";
import HeroSection from "../sections/Hero";
import SecondSection from "../sections/LandingSecondSection";
import ThirdSection from "../sections/LandingThirdSection";
import FourthSection from "../sections/LandingFourthSection";
import SimpleSlider from "../sections/TestimonialSection/carousel";
import TrySoftware from "../sections/LandingSixthSection";
import Footer from "../sections/Footer";
import NavBar from "../sections/Navbar";
import AppDrawer from "../components/drawer";

const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const RandomWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "50px",
}));

function LandingPage() {
  return (
    <Wrapper>
      <NavBar />
      <AppDrawer />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SimpleSlider />
      <TrySoftware />
      <Footer />
    </Wrapper>
  );
}

export default LandingPage;
