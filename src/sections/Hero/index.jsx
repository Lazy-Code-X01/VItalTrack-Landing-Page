import React from 'react';
import { Box, Typography, styled, Button } from '@mui/material';

const HeroWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundImage: 'url(/assets/images/JPG&PNG/HeroBg.png)',
  backgroundSize: 'auto 80%',
  backgroundRepeat: 'no-repeat',
  marginLeft: '3rem',
  height: 'auto',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    backgroundSize: '100%',
    height: 'auto',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    backgroundImage: 'none',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '17rem',
  marginTop: '50px',

  [theme.breakpoints.down('md')]: {
    marginLeft: '10rem',
    marginTop: '40px',
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: '0',
    marginTop: '50px',
  },
}));

const ContentWrapperOne = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0',
  flexDirection: 'column',
}));

const ContentWrapperTwo = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0',
  flexDirection: 'row',
  gap: '60%',

  [theme.breakpoints.down('lg')]: {
    gap: '30%',
    // flexDirection: 'column'
  },

  [theme.breakpoints.down('md')]: {
    gap: '40%',
    // flexDirection: 'column'
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '40px',
  },
}));

const ContentWrapperThree = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0',
  flexDirection: 'row',
  gap: '12px',
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: '900',
  fontFamily: '',
  width: '46rem',
  height: 'auto',

  [theme.breakpoints.down('lg')]: {
    fontSize: '4rem',
    width: '30rem',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
    width: '26rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    width: '16rem',
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  width: '25rem',

  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    fontSize: '1rem',
  },
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  color: '#fff',
  background: '#844F93',
  height: '40px',
  width: '150px',

  // [theme.breakpoints.down('sm')] : {
  //   width: '100px'
  // }
}));

const ArrowWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginLeft: '45px',
  marginTop: '10px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ImageWrapper = styled('Img')(({ src, theme }) => ({
  src: `url(${src})`,
  marginTop: '30px',
  marginLeft: '5rem',
  height: 'auto',
  width: '85%',

  [theme.breakpoints.down('sm')]: {
    marginLeft: '1px',
    width: 'auto',
  },
}));

function HeroSection() {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <MainText>
          Explore <span style={{ color: '#844F93' }}> Health </span> Horizons.
        </MainText>
        <SubText>We blend insights to create digital products for forward-thinking university clinics.</SubText>
        <ContentWrapperOne>
          <h3>Compactible with:</h3>
          <ContentWrapperTwo>
            <ContentWrapperThree>
              <img src="/assets/images/JPG&PNG/windows.svg" alt="windows" style={{ width: '30px', height: '30px' }} />
              <img src="/assets/images/JPG&PNG/apple.svg" alt="apple" style={{ width: '30px', height: '30px' }} />
              <img src="/assets/images/JPG&PNG/linux.svg" alt="linux" style={{ width: '30px', height: '30px' }} />
            </ContentWrapperThree>
            <ButtonWrapper>Request a demo</ButtonWrapper>
          </ContentWrapperTwo>
          <ArrowWrapper>
            <img src="/assets/images/JPG&PNG/Arrow 2.png" alt="arrow" style={{ width: '20px', height: '70px' }} />
          </ArrowWrapper>
        </ContentWrapperOne>
      </ContentWrapper>
      <ImageWrapper src="/assets/images/JPG&PNG/UsersLogos.png" alt="users-logos" />
      <ArrowWrapper
        sx={{
          marginLeft: '70%',
        }}
      >
        <img src="/assets/images/JPG&PNG/Arrow 2.png" alt="arrow" style={{ width: '20px', height: '70px' }} />
      </ArrowWrapper>
    </HeroWrapper>
  );
}

export default HeroSection;
