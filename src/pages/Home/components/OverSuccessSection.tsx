import React from 'react';
import { Container, Grid, Typography, useTheme, Box } from '@mui/material';

const trustedUserLight = "./assets/png/trustedUser.png";
const coinsPurchasedLight = "./assets/png/coinsPurchased.png";
const totalInvestmentLight = "./assets/png/totalInvestment.png";
const establishedYearLight = "./assets/png/establishedYear.png";

const trustedUserDark = "./assets/png/trustedUserDark.png";
const coinsPurchasedDark = "./assets/png/coinsPurchasedDark.png";
const totalInvestmentDark = "./assets/png/totalInvestmentDark.png";
const establishedYearDark = "./assets/png/establishedYearDark.png";

const OverSuccessSection: React.FC = () => {
  const theme = useTheme();
  return (
    <section>
      <Container maxWidth="xl" className='py-12'>
        <Box className="text-center mb-16 pt-10">
          <Typography variant="h4" className="!mb-4 !text-5xl !font-medium" sx={{ color: theme.palette.text.primary }}>Over Success From Starting.</Typography>
          <Typography variant="body1" className='!text-lg !font-light' sx={{ color: theme.palette.primary.light }}>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6} sm={6} md={3} className="flex flex-col items-center">
          <div className="flex gap-4 items-center">
              <div><img src={theme.palette.mode === "dark" ? trustedUserDark : trustedUserLight } className="m-auto" /></div>
              <div>
                <div className='!text-4xl !font-bold' style={{color:theme.palette.mode=== "dark" ? "#1B70F1" : "#193E79"}}>15M+</div>
                <div className='!text-lg !font-normal' style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>Trusted Users</div>
              </div>
           
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={3} className="flex flex-col items-center">
          <div className="flex gap-4 items-center">
              <div><img src={theme.palette.mode === "dark" ? totalInvestmentDark : totalInvestmentLight } className="m-auto" /></div>
              <div>
                <div className='!text-4xl !font-bold' style={{color:theme.palette.mode=== "dark" ? "#1B70F1" : "#193E79"}}>$01B+</div>
                <div className='!text-lg !font-normal' style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>Total Investment</div>
              </div>
           
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={3} className="flex flex-col items-center">
          <div className="flex gap-4 items-center">
              <div><img src={theme.palette.mode === "dark" ? coinsPurchasedDark : coinsPurchasedLight } className="m-auto" /></div>
              <div>
                <div className='!text-4xl !font-bold' style={{color:theme.palette.mode=== "dark" ? "#1B70F1" : "#193E79"}}>$09M+</div>
                <div className='!text-lg !font-normal' style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>Coins Purchased</div>
              </div>
           
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={3} className="flex flex-col items-center">
          <div className="flex gap-4 items-center">
              <div><img src={theme.palette.mode === "dark" ? establishedYearDark : establishedYearLight } className="m-auto" /></div>
              <div>
                <div className='!text-4xl !font-bold' style={{color:theme.palette.mode=== "dark" ? "#1B70F1" : "#193E79"}}>05+</div>
                <div className='!text-lg !font-normal' style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>Established Year</div>
              </div>
           
            </div>
          </Grid>
        </Grid>

      </Container>
    </section>
  );
};

export default OverSuccessSection;
