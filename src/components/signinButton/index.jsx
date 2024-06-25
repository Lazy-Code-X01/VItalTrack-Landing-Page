import { Button, styled } from "@mui/material";
import React from "react";


const ButtonWrapper = styled(Button)(({ theme }) => ({
  color: "#000",
  background: "transparent",
  height: "40px",
  width: "150px",
  border: '1px solid #844F93'

  // [theme.breakpoints.down('sm')] : {
  //   width: '100px'
  // }
}));

function SigninButton({ sx }) {
  return <ButtonWrapper sx={sx}>Sign in</ButtonWrapper>;
}

export default SigninButton;
