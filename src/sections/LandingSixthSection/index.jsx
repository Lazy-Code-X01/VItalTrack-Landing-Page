import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import DemoButton from "../../components/demo-button";

const SectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: 0,
  position: "relative",
}));

const TiltedSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  backgroundColor: "#001029",
  color: "white",
  padding: "20px",
  fontSize: "24px",
  textAlign: "center",
  justifyContent: "center",
  borderRadius: "10px",
  // transform: translate(-50%, -50%) rotate(15deg),
  transform:
    "translate(-50%, -50%) rotate(-4.041deg) " /* Adjust the degree to tilt the div */,
  transformOrigin: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 999,
  width: "70%",
  height: "70%",

  top: "50%",
  left: "50%",

  position: "absolute",
}));

const UntiltedSection = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "black",
  color: "white",
  padding: "20px",
  fontSize: "24px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  width: "70%",
  height: "70%",

  transform: "translate(-50%, -50%)",

  top: "50%",
  left: "50%",

  position: "absolute",
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  transform: "rotate(4.041deg) ",
  fontWeight: "bold",
  marginTop: "2rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    marginTop: "2rem",
  },
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  transform: "rotate(4.041deg) ",
  textAlign: "center",
  alignSelf: "center",
  width: "70%",
}));

// const ArrowWrapper = styled(Box)(({ theme }) => ({
//   display: "flex",
//   marginTop: "10px",

//   [theme.breakpoints.down("md")]: {
//     display: "none",
//   },
// }));

const customStyle = {
  transform: "rotate(4.041deg)",
  alignSelf: "center",
  marginTop: "10px",
};

function TrySoftware() {
  return (
    <div>
      <SectionWrapper>
        <UntiltedSection></UntiltedSection>
        <TiltedSection>
          <HeaderText>Try our software!</HeaderText>
          <BodyText>
            We designed and tested prototypes that helped identify pain points
            in the account creation process. Together, we shaped the new
            standard.
          </BodyText>
          <DemoButton sx={customStyle} />
          <BodyText sx={{ fontSize: "0.7rem" }}>
            No Credit Card Required
          </BodyText>
        </TiltedSection>
      </SectionWrapper>
      {/* <ArrowWrapper sx={{ marginLeft: "85%" }}>
        <img
          src="/assets/images/JPG&PNG/Arrow 2.png"
          alt="arrow"
          style={{ width: "20px", height: "70px" }}
        />
      </ArrowWrapper> */}
    </div>
  );
}

export default TrySoftware;
