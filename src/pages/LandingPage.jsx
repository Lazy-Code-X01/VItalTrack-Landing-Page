import React from 'react';
import { Box, styled } from '@mui/material';
import HeroSection from '../sections/Hero';
import SecondSection from '../sections/LandingSecondSection';
import ThirdSection from '../sections/LandingThirdSection';
import FourthSection from '../sections/LandingFourthSection';
import SimpleSlider from '../sections/TestimonialSection/carousel';
import TrySoftware from '../sections/LandingSixthSection';




const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px'

}));

function LandingPage() {
  return (
    <Wrapper>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SimpleSlider />
      <TrySoftware />
    </Wrapper>
  );
}

export default LandingPage;
