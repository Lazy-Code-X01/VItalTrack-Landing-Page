import styled from '@emotion/styled';
import React from 'react';
import { Box, Button, Styled, Typography } from '@mui/material';

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: '#001029',
  padding: ' 50px 0 ',
}));

const SubWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: '900',
  fontSize: '2.5rem',
  marginBottom: '20px',
}));

const SubText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '1rem',
  width: '55%',
  textAlign: 'center',
  marginBottom: '20px',

  [theme.breakpoints.down('md')] : {
    width: '90%',
    marginBottom: '50px',
  }
}));

const OptionsWrapperHolder = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  marginBottom: '50px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const OptionsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',

  [theme.breakpoints.down('md')]: {
    // flexDirection: 'column',
    width: 'auto',
  },
}));

const ImageWrapper = styled('Img')(({ src, theme }) => ({
  src: `(${src})`,
  width: '50px',
  height: '50px',

  [theme.breakpoints.down('md')] : {
      width: '30px',
      height: '30px'
  }
}));

const OptionsText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  width: '100%',
  textAlign: 'left',

  [theme.breakpoints.down('md')] : {
    width:'80%',
  }
}));

const OptionsTextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const OptionsTextBold = styled(Typography)(({ theme }) => ({
  color: '#fff',
  width: 'auto',
  textAlign: 'left',
  fontWeight: '900',
}));

const ArrowWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '10px',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

function FourthSection() {
  return (
    <>
    <SectionWrapper>
      <SubWrapper>
        <HeaderText>One Software, Every Solution</HeaderText>
        <SubText>
          The comprehensive university clinic management system, simplifying and optimizing administrative tasks for all
          types and sizes of educational institutions.
        </SubText>

        <OptionsWrapperHolder>
          <OptionsWrapper>
            <ImageWrapper src="/assets/Easytouse.png" alt="Easytouse" />

            <OptionsTextWrapper>
              <OptionsTextBold>Easy To Use</OptionsTextBold>
              <OptionsText>
                No complicated menus or confusing jargon, just a clean and easy-to-use platform that gets the job done.
              </OptionsText>
            </OptionsTextWrapper>
          </OptionsWrapper>

          <OptionsWrapper>
            <ImageWrapper src="/assets/Automaticupdate.png" alt="Automatic" />

            <OptionsTextWrapper>
              <OptionsTextBold>Automatic Update</OptionsTextBold>
              <OptionsText>
                With automatic updates that keep you up-to-date with the latest features and improvements.
              </OptionsText>
            </OptionsTextWrapper>
          </OptionsWrapper>
        </OptionsWrapperHolder>

        <OptionsWrapperHolder>
          <OptionsWrapper>
            <ImageWrapper src="/assets/Responsive.png" alt="Easytouse" />

            <OptionsTextWrapper>
              <OptionsTextBold>100% Responsive</OptionsTextBold>
              <OptionsText>
                Software designed to work seamlessly across all devices and screen sizes. Whether you're using a desktop
                computer, laptop, tablet, or smartphone.
              </OptionsText>
            </OptionsTextWrapper>
          </OptionsWrapper>

          <OptionsWrapper>
            <ImageWrapper src="/assets/Richdoc.png" alt="Automatic" />

            <OptionsTextWrapper>
              <OptionsTextBold>Rich Documentation</OptionsTextBold>
              <OptionsText>
                Makes it easy to learn and use, you'll have access to comprehensive and well-organized documentation,
                including user guides and video tutorials
              </OptionsText>
            </OptionsTextWrapper>
          </OptionsWrapper>
        </OptionsWrapperHolder>
      </SubWrapper>
    </SectionWrapper>
    <ArrowWrapper sx={{ marginLeft: '85%' }}>
        <img src="/assets/images/JPG&PNG/Arrow 2.png" alt="arrow" style={{ width: '20px', height: '70px' }} />
      </ArrowWrapper>
    </>
  );
}

export default FourthSection;
