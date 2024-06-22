import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";


const ButtonWrapper = styled(Button)(({ theme }) => ({
  color: "#fff",
  background: "#844F93",
  height: "40px",
  width: "150px",

  // [theme.breakpoints.down('sm')] : {
  //   width: '100px'
  // }
}));

function DemoButton({ sx }) {
  return <ButtonWrapper sx={sx}>Request a demo</ButtonWrapper>;
}

export default DemoButton;
