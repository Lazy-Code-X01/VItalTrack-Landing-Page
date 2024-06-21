import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'

import React from "react";
import Slider from "react-slick";
import CarouselCard from "./carouselcard";
import { Testimonials } from "./data";
import { Box, Typography, styled } from "@mui/material";



const SectionWrapper = styled(Box)(({theme}) =>({
  display: "flex",
  flexDirection: 'column',
  background: '#f5f5f5',
  gap: '50px',
  padding: '100px 0'

  // [theme.breakpoints.down('md')] : {
  //   paddingLeft: '30px'
  // }
}));

const MainTextWrapper = styled(Typography)(({theme}) => ({
  fontSize: '3rem',
  alignSelf: 'center',
  fontWeight: '900',
}))

const CardHolder = styled(Box)(({theme}) =>({
  display: "flex",
  justifySelf: 'center',
  paddingLeft: '50px',
  width: '95%',

  [theme.breakpoints.down('md')] : {
    paddingLeft: '30px'
  }
}));


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderTestimonials = Testimonials.map((e) => {
    return <CarouselCard key={e.id} {...e} />;
  });

  return (
    <SectionWrapper>

      <MainTextWrapper>
        What to expect
      </MainTextWrapper>
          <CardHolder>
      <div className="slider-container" style={{ width: '100%',}}>
        <Slider {...settings}>{renderTestimonials}</Slider>
    </div>
    </CardHolder>
    </SectionWrapper>
    
  );
}

export default Responsive;
