import {
  Drawer,
  IconButton,
  styled,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui";
import SigninButton from "../signinButton";
import { useState } from "react";
import Contact from "../../pages/ContactPage";

const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: "300px",
  zIndex: 1999,
}));

const DrawerWrapper = styled(Box)(({theme}) =>({
  background: 'purple',
  borderRadius: '50px'
}))

const SocialsSubSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
  paddingTop: '90%'
}));

const TextWrapper = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
}));

const ImageWrapper = styled("Img")(({ src, theme }) => ({
  src: `(${src})`,
  width: "50px",
  height: "50px",
}));

function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  // const [showContact, setShowContact] = useUIContext();

  // const TogglePage = () => {
  //   // setShowContact(true)

  //   console.log("Showing Contact Page");
  // };


  return (
    <DrawerWrapper>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "1.5rem",
              color: "#844F93",
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List sx={{
          margin: '50px 50px'
        }}>
          <ListItemButton>
            <ListItemText> Features </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText> Teams </ListItemText>
          </ListItemButton>
            <ListItemButton Link to='contact'>
            <ListItemText> Contact </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText> <SigninButton /> </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <SocialsSubSectionWrapper>
                <ImageWrapper
                  src="/assets/icons/FB.png"
                  alt="Facebook"
                  sx={{ width: "20px", height: "20px" }}
                />
                <ImageWrapper
                  src="/assets/icons/Twitter.png"
                  alt="Twitter"
                  sx={{ width: "20px", height: "20px" }}
                />
                <ImageWrapper
                  src="/assets/icons/IG.png"
                  alt="Instagram"
                  sx={{ width: "20px", height: "20px" }}
                />
              </SocialsSubSectionWrapper>

              <TextWrapper
                sx={{
                  textAlign: "center",
                  fontWeight: "300",
                  fontSize: "1rem",
                }}
              >
                © 3nergy 2023 All right reserved.
              </TextWrapper>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </DrawerWrapper>
  );
}

export default AppDrawer;
