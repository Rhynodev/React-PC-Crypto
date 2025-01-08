import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  Link,
  Box,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { updateNickName } from "../../../store/actions/authAction";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store"; // Import the AppDispatch type
const SocialFBL = "src/assets/socialsIcons/FacebookLight.png";
const SocialTGL = "src/assets/socialsIcons/TelegramLight.png";
const SocialTWL = "src/assets/socialsIcons/TwitterLight.png";
const SocialFBD = "src/assets/socialsIcons/FacebookDark.png";
const SocialTGD = "src/assets/socialsIcons/TelegramDark.png";
const SocialTWD = "src/assets/socialsIcons/TwitterDark.png";
const Footer: React.FC = () => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nickname, _setNickname] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdateNickName = () => {
    const data = { nickname };

    dispatch(
      updateNickName(data, (response) => {
        if (typeof response === "string") {
          // Handle error
          console.error("Error:", response);
        } else {
          // Handle success
          //console.log("Success:", response.message);
        }
      })
    );
  };
  // const FooetBgL = "./assets/png/footerBgLight.png";
  // const FooetBgD = "./assets/png/footerBgDark.png";
  console.log("footer", theme);
  return (
    <Box
      className="footerBackground"
      // sx={{
      //   backgroundImage:
      //     theme.palette.mode === "dark"
      //       ? `url(${FooetBgD})`
      //       : `url(${FooetBgL})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   paddingTop: "50px",
      // }}
    >
      {/* news letter section  */}
      <Container maxWidth="xl" className="p-0 m-0 pl-0 pr-0 mb-20 pt-20">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="flex flex-col items-center justify-center">
              <button onClick={handleUpdateNickName}>Update Nickname</button>
              <Typography
                variant="h4"
                component="h2"
                className="!font-semibold mb-4 !text-3xl pb-6"
                sx={{ color: theme.palette.text.secondary }}
              >
                Subscribe Our Newsletter.
              </Typography>
              <Typography
                variant="body1"
                className="text-center !font-normal !text-lg !mb-8 pb-6"
                sx={{ color: theme.palette.text.secondary }}
              >
                Lorem Ipsum has been the industry's standard dummy text ever
                since 1500s.
              </Typography>
              <Box className="flex w-full max-w-md gap-10">
                <TextField
                  variant="outlined"
                  placeholder="Enter Here"
                  className="flex-grow mr-2"
                  fullWidth
                  sx={{ color: theme.palette.text.secondary }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="!text-xl !font-normal"
                  sx={{
                    boxShadow: "none",
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    minWidth: "auto",
                    textTransform: "capitalize",
                    "&:hover": {
                      background: theme.palette.primary.main,
                      boxShadow: "none",
                      border: "none",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* footer section  */}
      <Container maxWidth="xl" className="p-0 m-0 pl-0 pr-0">
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Contact Us
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Career
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Community
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Customer Chat
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Technical Support
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Knowledge
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Articles
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Video Tutorial
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Beginner's Guide
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Services
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              API Service
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Token Listing
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Ticker Services
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Press
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              News
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Events
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Blogs
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Company
            </div>
            <Box>
              <Typography
                sx={{ color: theme.palette.text.secondary }}
                className="block text-base font-normal pb-2 !no-underline"
              >
                +865-123-123-12
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.secondary }}
                className="block text-base font-normal pb-2 !no-underline"
              >
                dummymail@gmail.com
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.secondary }}
                className="block text-base font-normal pb-2 !no-underline"
              >
                34hno, back wand street, saint Phnom phen,84330 Cambodia
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" className="p-0 pb-4 m-0 pl-0 pr-0">
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Crypto
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              {" "}
              11111 F&Q
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Team
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              About Us
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Road Map
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Legal
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Risk Disclosure
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Exchange
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              P2P
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Spot Market
            </Link>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              Spot Trading
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="font-semibold	text-lg	pb-4"
            >
              Developer
            </div>
            <Link
              href="#"
              sx={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal pb-2 !no-underline"
            >
              API DOcument
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container maxWidth="xl" className="pt-6 pb-6 m-0 pl-0 pr-0">
        <Grid container className="items-center">
          <Grid item xs={6} sm={6} md={6}>
            <Link
              href="#"
              style={{ color: theme.palette.text.secondary }}
              className="block text-base font-normal !no-underline"
            >
              {" "}
              @Copyright 2024 All Rights are Reserved.
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            className="text-right flex justify-end"
          >
            <Link href="#" className="pr-6">
              <img src={theme.palette.mode == "dark" ? SocialFBD : SocialFBL} />
            </Link>
            <Link href="#" className="pr-6">
              <img src={theme.palette.mode == "dark" ? SocialTGD : SocialTGL} />
            </Link>
            <Link href="#">
              <img src={theme.palette.mode == "dark" ? SocialTWD : SocialTWL} />
            </Link>
          </Grid>
        </Grid>
      </Container>

      <style>
        {`
          .footerBackground {
            position: relative;
          }
          .footerBackground::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 0.7;
            z-index: -1;
            width: 694px;
            height: 694px;
            filter: blur(400px);
          }

@media (max-width:768px) {
        .footerBackground::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: transparent;
            opacity: 0.7;
            z-index: -1;
            width: 100% !important;
            height: 100% !important;
            filter: blur(400px);
        }
}

          
        `}
      </style>
    </Box>
  );
};

export default Footer;
