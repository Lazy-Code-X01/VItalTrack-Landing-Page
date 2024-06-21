import styled from '@emotion/styled';
import React from 'react';
import { Box, Button, Styled, Typography } from '@mui/material';

const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '35px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ImageWrapper = styled('Img')(({ src, theme }) => ({
  src: `(${src})`,
  width: 'auto',
  height: 'auto',

  [theme.breakpoints.down('lg')]: {
    width: '470px',
  },

  [theme.breakpoints.down('md')]: {
    width: 'auto',
    padding: '0 5%',
  },
}));

const HeaderTextWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: '300',

  [theme.breakpoints.down('lg')]: {
    width: 'auto',
    padding: '0 5%',
  },

  [theme.breakpoints.down('md')]: {
    width: 'auto',
    padding: '0 5%',
  },

  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    fontSize: '1.3rem',
  },
}));

const SubWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const SubWrapperTwo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

const TextWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  width: '400px',

  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    width: 'auto',
    padding: '0 5%',
  },
}));

const TextWrapperCover = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '30px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    gap: '15px',
    width: 'auto',
  },
}));

const ArrowWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '10px',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SubTextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  width: 'auto',

    [theme.breakpoints.down('lg')]: {
    gap: '20px',
  },
}));

const TickWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
     flexDirection: 'column', 
    width: 'auto',

        [theme.breakpoints.down('sm')] : {
        gap: '15px',
    }
}));

const TickImageWrapper = styled('Img')(({ src, theme }) => ({
    src: `(${src})`,
    width: '30px',
    height: '30px',

    [theme.breakpoints.down('lg')] : {
        width: '15px',
        height: '15px'
    }
}));

const TickTextWrapper = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    width: '400px',
  
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      width: 'auto',
    },
  }));

function ThirdSection() {
  return (
    <SectionWrapper>
      <SubWrapper>
        <ImageWrapper src="/assets/images/JPG&PNG/Image1.png" />
        <TextWrapperCover>
          <HeaderTextWrapper>
            <span style={{ color: '#844F93' }}> Track </span> Students
          </HeaderTextWrapper>
          <TickWrapper>
            <SubTextWrapper>
              <TickImageWrapper src="/assets/images/JPG&PNG/Vector.png" />
              <TickTextWrapper>Efficient Record Keeping</TickTextWrapper>
            </SubTextWrapper>
            <SubTextWrapper>
              <TickImageWrapper src="/assets/images/JPG&PNG/Vector.png" />
              <TickTextWrapper>Efficient Record Keeping</TickTextWrapper>
            </SubTextWrapper>
            <SubTextWrapper>
              <TickImageWrapper src="/assets/images/JPG&PNG/Vector.png" />
              <TickTextWrapper>Efficient Record Keeping</TickTextWrapper>
            </SubTextWrapper>
            <SubTextWrapper>
              <TickImageWrapper src="/assets/images/JPG&PNG/Vector.png" />
              <TickTextWrapper>Efficient Record Keeping</TickTextWrapper>
            </SubTextWrapper>
          </TickWrapper>
        </TextWrapperCover>
      </SubWrapper>

      <ArrowWrapper sx={{ marginLeft: '70%' }}>
        <img src="/assets/images/JPG&PNG/Arrow 2.png" alt="arrow" style={{ width: '20px', height: '70px' }} />
      </ArrowWrapper>

      <SubWrapperTwo>
        <TextWrapperCover>
          <HeaderTextWrapper>
            <span style={{ color: '#844F93' }}> Student </span> Management
          </HeaderTextWrapper>
          <TextWrapper>
            Simplify student information management with our Students Management feature. Effortlessly organize and
            access vital data, enhancing the efficiency and precision of university clinic operations for better student
            healthcare.
          </TextWrapper>
        </TextWrapperCover>
        <ImageWrapper src="/assets/images/JPG&PNG/Image1.png" />
      </SubWrapperTwo>

      <ArrowWrapper sx={{ marginLeft: '-50%' }}>
        <img src="/assets/images/JPG&PNG/Arrow 2.png" alt="arrow" style={{ width: '20px', height: '70px' }} />
      </ArrowWrapper>
    </SectionWrapper>
  );
}

export default ThirdSection;
