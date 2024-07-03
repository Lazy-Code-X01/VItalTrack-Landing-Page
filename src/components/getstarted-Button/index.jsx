import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";


const ButtonWrapper = styled(Button)(({ theme }) => ({
  color: "#fff",
  background: "#2065D1",
  height: "40px",
  width: "200px",

  [theme.breakpoints.down('md')] : {
    marginLeft: '30px'
  },
  
  [theme.breakpoints.down('sm')] : {
    marginLeft: '20px'
  }
}));

function GetStartedButton({ sx }) {
  return <ButtonWrapper sx={sx}> Get Started </ButtonWrapper>;
}

export default GetStartedButton;
