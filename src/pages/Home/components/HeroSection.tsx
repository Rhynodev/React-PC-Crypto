// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const HeroSection: React.FC = () => {
//   return (
// <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={6} md={8}>
//           <Item>xs=6 md=8</Item>
//         </Grid>
//         <Grid item xs={6} md={4}>
//           <Item>xs=6 md=4</Item>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// };

// export default HeroSection;

import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  TextField,
  MenuItem,
  Select,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";

const HeroSection: React.FC = () => {
  const Portfolio = "./assets/png/portfolioImg.png";

  const currencies = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];

  const cryptos = [
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "LTC", label: "LTC" },
  ];

  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";

  const textFieldStyles = {
    backgroundColor: isLightTheme ? "transparent" : "#000000",
    color: isLightTheme ? "black" : "white",
  };

  return (
    <section
      className={`HeroBackground ${
        theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"
      }`}
    >
      <Container maxWidth="xl" className="p-0 pb-4 m-0 pl-0 pr-0">
        <Grid container spacing={6} sx={{ paddingBottom: "30px" }}>
          <Grid item xs={12} sm={12} md={8}>
            <div className="flex flex-col pt-10">
              <Typography
                variant="h4"
                component="h2"
                className="!font-semibold mb-4 !text-7xl pb-6 pt-6"
                sx={{
                  color: theme.palette.secondary.light,
                  lineHeight: "100px !important",
                  width: "100%",
                  maxWidth: "800px",
                }}
              >
                Create Your{" "}
                <span style={{ color: "#19A0F3" }}> Portfolio </span> With
                Crypto.
              </Typography>
              <Typography
                variant="body1"
                className="!font-normal !text-lg !mb-8 pb-6 "
                sx={{
                  color: theme.palette.secondary.light,
                  width: "100%",
                  maxWidth: "580px",
                }}
              >
                Sign up today and buy 65+ cryptocurrencies in minutes. Get
                Started with as little as $10
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <TextField
                  variant="outlined"
                  placeholder="Enter Here"
                  style={textFieldStyles}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.MuiInputBase-adornedEnd": {
                        paddingRight: "10px",
                        boxShadow: "0px 0px 6px 0px #00000040",
                        // color: theme.palette.primary.light,
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          defaultValue="USD"
                          sx={{
                            backgroundColor: isLightTheme
                              ? "transparent"
                              : "#000000",
                            "& .MuiSelect-select": {
                              padding: "6px 10px",
                              background:
                                theme.palette.mode === "dark"
                                  ? "#393939"
                                  : "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                              color: "#fff",
                            },
                          }}
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                />
                <IconButton aria-label="exchange">
                  <CachedRoundedIcon
                    sx={{ color: theme.palette.primary.light }}
                  />
                </IconButton>
                <TextField
                  variant="outlined"
                  placeholder="Enter Here"
                  style={textFieldStyles}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.MuiInputBase-adornedEnd": {
                        paddingRight: "10px",
                        boxShadow: "0px 0px 6px 0px #00000040",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          defaultValue="BTC"
                          sx={{
                            backgroundColor: isLightTheme
                              ? "transparent"
                              : "#000000",
                            "& .MuiSelect-select": {
                              padding: "6px 10px",
                              background:
                                theme.palette.mode === "dark"
                                  ? "#393939"
                                  : "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                              color: "#fff",
                            },
                          }}
                        >
                          {cryptos.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="flex flex-col items-center justify-center  pt-6">
              <img src={Portfolio} />
            </div>
          </Grid>
        </Grid>
      </Container>
      <style>
        {`
 .MuiAutocomplete-popupIndicator{
  display:none !important;
}
    .HeroBackground.darkThemeClass {
            position: relative;
          }
          .HeroBackground.darkThemeClass::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 0.7;
            z-index: -1;
            width: 500px;
            height: 500px;
            filter: blur(200px);
          }

   @media (max-width:768px) {
        .HeroBackground::before {
             content: '';
            position: absolute;
            top: 0;
            right: 0;
          background: transparent;
            opacity: 0.7;
            z-index: -1;
            width: 100% !important;
            height: 100% !important;
            filter: blur(400px);
        }
}


.HeroBackground .MuiTextField-root fieldset{
    border-width: 0px !important;
    border-color: transparent !important;
}
    .MuiTextField-root svg{
       color: #fff;
}


`}
      </style>
    </section>
  );
};

export default HeroSection;
