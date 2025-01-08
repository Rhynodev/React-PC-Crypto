import React from 'react';
import { Container, Grid, Typography, useTheme, List, ListItem } from '@mui/material';


const TradingStepsSection: React.FC = () => {
  const theme = useTheme();
  return (
    <section className={`TradingStepsBackground py-28 ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`}>
 <Container maxWidth="xl">
    <Grid container spacing={4}>
          <Grid item xs={6} sm={6} md={6}>
         
            <div className="">
              <div className='!text-5xl !font-semibold w-3/4 pb-16' style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#193E79"}}>
                Start Trading in Simple Steps
              </div>
              <List>
                <ListItem className='!block'>
                  <Grid item style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}} className='pb-2'>1. Create Account</Grid>
                <Typography style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>Lorem Ipsum has been the Industry’s standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type. specimen book.
                </Typography>
                </ListItem>
                <ListItem className='!block'>
                  <Grid item style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}} className='pb-2'>3. Add Funds to Wallet</Grid>
                <Typography style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>Lorem Ipsum has been the Industry’s standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type. specimen book.
                </Typography>
                </ListItem>
              </List>
            </div>
        
            
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
           
            <div className="">
              <div className='!text-lg !font-normal pb-28' style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>
              It has surviev not only five centuries, also the leap into electronic typesetting, remaining
              essentially unchanged. It was populariesd in the 1960s with the release.
              </div>

              
              <List>
                <ListItem className='!block'>
                  <Grid item style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}} className='pb-2'>2. Verify Your Bank</Grid>
                <Typography style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>
                  Lorem Ipsum has been the Industry’s standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type. specimen book.
                </Typography>
                </ListItem>
                <ListItem className='!block'>
                  <Grid item style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}} className='pb-2'>4. Start Trading</Grid>
                <Typography style={{color:theme.palette.mode=== "dark" ? "#F5F5F5" : "#8790A0"}}>
                Lorem Ipsum has been the Industry’s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make
                a type. specimen book.
                </Typography>
                </ListItem>
              </List>
            </div>
          
          </Grid>
       
          
        
    </Grid>
</Container>
    <style>
        {`
    .TradingStepsBackground.darkThemeClass {
            position: relative;
          }
    .TradingStepsBackground.darkThemeClass::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 0.7;
            z-index: -1;
            width: 500px;
            height: 500px;
            filter: blur(200px);
          }

    @media (max-width:768px) {
        .TradingStepsBackground::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
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

export default TradingStepsSection;
