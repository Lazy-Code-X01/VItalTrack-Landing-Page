import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CardWrapper = styled(Box)(({theme}) =>({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  [theme.breakpoints.down('md')] : {
    width: '300px'
  }
}));

const ProfileImageAndTitleWrapper = styled(Box)(({theme}) =>({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px'
}));

const NameAndSchoolWrapper = styled(Box)(({theme}) =>({
  display: 'flex',
  flexDirection: 'column',
  gap: '0px'
}));

const ProfileImage = styled('Img')(({src, theme}) =>({
  src:`url(${src})`,
  height: '50px',
  width: '50px'
}));

const TextWrapper = styled(Typography)(({theme}) =>({
  fontSize: '1rem',
  width: '300px'
}));

const NameWrapper = styled(Typography)(({theme}) =>({
  fontSize: '1rem',
  fontWeight: 'bold'
}));



function CarouselCard(props) {
  return (
    <CardWrapper>
        <TextWrapper>
          {props.content}
        </TextWrapper>
        <ProfileImageAndTitleWrapper>
            <ProfileImage src={props.dp}/>
            <NameAndSchoolWrapper>
            <NameWrapper>
              {props.name}
            </NameWrapper>
              {props.school}
            </NameAndSchoolWrapper>
        </ProfileImageAndTitleWrapper>
    </CardWrapper>
  );
};

export default CarouselCard;