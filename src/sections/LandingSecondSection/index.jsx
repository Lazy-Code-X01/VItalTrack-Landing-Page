import styled from '@emotion/styled';
import { Box, Button, Styled, Typography } from '@mui/material';
import React from 'react';
import GetStartedButton from '../../components/getstarted-Button';

const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
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

    [theme.breakpoints.down('sm')] : {
      padding: '0 5%',
    }
}));

const HeaderTextWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: '300',

  [theme.breakpoints.down('lg')]: {
    width: '40%',
    padding: '0 5%',
  },

  [theme.breakpoints.down('md')]: {
    width: 'auto',
    // padding: '0 5%',
  },

  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    fontSize: '1.3rem',
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

  [theme.breakpoints.down('sm')]: {
    padding: '5%',
  },
}));

const TextWrapperCover = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '30px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    gap: '1px',
    width: 'auto',
  },
}));

const TextWrapperCoverTwo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '30px',

  [theme.breakpoints.down('lg')]: {},

  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    gap: '1px',
    width: 'auto',
  },
}));

const BoxWrapper = styled(Box)(({ theme }) => ({
  border: '1px solid black',
  display: 'flex',
  padding: '20px 10px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  width: '500px',

  [theme.breakpoints.down('lg')]: {
    width: 'auto',
  },
}));

const BoxSubWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const BoxWrapperCover = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',

  //   [theme.breakpoints.down('lg')] : {
  //     flexDirection: 'row'
  //   }
}));

const IconHolder = styled('Img')(({ src, theme }) => ({
  src: `(${src})`,
  height: '30px',
  width: '30px',
}));

const BoxTextBold = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: '500',

  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

const BoxText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',

  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
  },
}));

const ArrowWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '10px',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));


function SecondSection() {
  return (
    <SectionWrapper>
      <SubWrapper>
        <ImageWrapper src="/assets/images/JPG&PNG/Image1.png" />
        <TextWrapperCover>
          <HeaderTextWrapper>
            <span style={{ color: '#844F93' }}> Diagnosis </span> Management
          </HeaderTextWrapper>
          <TextWrapper>
            Effortlessly oversee patient diagnoses with our Diagnosis Management feature. Streamline record-keeping,
            analysis, and tracking, empowering university clinics to provide precise and efficient healthcare services.
          </TextWrapper>
        <GetStartedButton />
        </TextWrapperCover>
      </SubWrapper>

      <ArrowWrapper sx={{ marginLeft: '70%' }}>
        <img src="/assets/images/JPG&PNG/Arrow 2.png" alt="arrow" style={{ width: '20px', height: '70px' }} />
      </ArrowWrapper>

      <SubWrapperTwo>
        <TextWrapperCoverTwo>
          <HeaderTextWrapper>
            <span style={{ color: '#844F93' }}> Students </span> Management
          </HeaderTextWrapper>
          <BoxWrapperCover>
            <BoxWrapper>
              <IconHolder src="/assets/images/JPG&PNG/PeopleGroup.png" />
              <BoxSubWrapper>
                <BoxTextBold> Centralized Data Management </BoxTextBold>
                <BoxText> All the data in one place. </BoxText>
              </BoxSubWrapper>
            </BoxWrapper>

            <BoxWrapper>
              <IconHolder src="/assets/images/JPG&PNG/Person.png" />
              <BoxSubWrapper>
                <BoxTextBold> Student Data Management </BoxTextBold>
                <BoxText> Adding, editing, updating of members data. </BoxText>
              </BoxSubWrapper>
            </BoxWrapper>
          </BoxWrapperCover>
        </TextWrapperCoverTwo>

        <ImageWrapper src="/assets/images/JPG&PNG/Image2.png" />
      </SubWrapperTwo>

      <ArrowWrapper sx={{ marginLeft: '-45%' }}>
        <img src="/assets/images/JPG&PNG/Arrow 2.png" alt="arrow" style={{ width: '20px', height: '70px' }} />
      </ArrowWrapper>
    </SectionWrapper>
  );
}

export default SecondSection;
