import React from 'react';
import { Grid,Box,useTheme,Typography,Button,Container } from '@mui/material';

const TradingPlatformSection: React.FC = () => {
const Plateform = './assets/png/PlateformIllustrations.png'




  const theme = useTheme();
  return (
    <section  className={`TradingBackground py-24 ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`}>
    <Container  maxWidth="xl" className="p-0 pb-4 m-0 pl-0 pr-0 pt-20 pb-20">
    <Grid container spacing={6} sx={{ paddingBottom:"30px"}}>
    <Grid item xs={12} sm={12} md={6}>
      <div className="flex items-center justify-left">
          <img src={Plateform} style={{width:"500px"}} />          
      </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
      <div className="flex flex-col">
              <Typography
                variant="h4"
                component="h2"
                className="!font-bold mb-4 !text-5xl pb-6 max-w-lg pt-6"
                sx={{ color: theme.palette.secondary.main, lineHeight:"67px !important" }}
              >
              Crypto is the Trading
              Platform In Market
              </Typography>
              <Typography
                variant="body1"
                className="!font-normal !text-lg !mb-8"
                sx={{ color: theme.palette.secondary.light }}
              >
             It has survived not only five centuties, but also the leap into electronic typesetting,
remaining essentially unchanged, It was popularised in the 1960s with the release of
letraset sheets containing lorem ipsum passages.   
              </Typography>
              
<Box className="flex w-full max-w-md gap-2">
              
                <Button
                  variant="contained"
                  color="primary"
                  className="!text-xl !font-normal"
                  sx={{
                    boxShadow: "none",
                    background:theme.palette.primary.main,
                    color: "#fff",
                    fontSize:"18px !important",
                    minWidth: "auto",
                    textTransform: "capitalize",
                    "&:hover": {
                      background:theme.palette.primary.main,
                      boxShadow: "none",
                      border: "none",
                    },
                  }}
                >
                 Start Trading
                </Button>
</Box>
      </div>
      </Grid>
     
    </Grid>
  </Container>
      <style>
        {`

 .MuiAutocomplete-popupIndicator{
  display:none !important;
}

    .TradingBackground.darkThemeClass {
            position: relative;
          }
          .TradingBackground.darkThemeClass::before {
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
        .TradingBackground::before {
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
`}

      </style>

  </section>
  );
};

export default TradingPlatformSection;
