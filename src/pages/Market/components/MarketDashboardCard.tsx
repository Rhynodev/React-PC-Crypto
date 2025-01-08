

import React from 'react';
import { Container, Grid, Typography, Box,useTheme } from '@mui/material';

const cardIcon = "./assets/Market/RippleIcon.png";
const starIcon = "./assets/Market/starIcon.png";
const Graph1 = "./assets/Market/LossGraph.png";
const Graph2 = "./assets/Market/ProfitGraph.png";
const starIconFill = "./assets/Market/starIconFill.png";

const features = [
  { icon: cardIcon,starIcon:starIcon,graphIcon:Graph1, title: "Ripple", subTitle: "RPE" },
  { icon: cardIcon,starIcon:starIconFill,graphIcon:Graph2, title: "Ripple", subTitle: "RPE" },
  { icon: cardIcon,starIcon:starIcon,graphIcon:Graph1, title: "Ripple", subTitle: "RPE" },
  { icon: cardIcon,starIcon:starIconFill,graphIcon:Graph2, title: "Ripple", subTitle: "RPE" },
];

const MarketDashboardCard: React.FC = () => {
  const theme = useTheme();

  return (
    <section className="py-24 ">
    <Container maxWidth="xl">
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box className="p-4 pt-8 pb-8 rounded-lg  text-white" sx={{background:theme.palette.mode==="dark" ? "#1C2130":"#fff",border:theme.palette.mode==="dark" ? "1px solid #ffffff35":"1px solid #ffffff",borderRadius:"4px" }}>
           <Grid className='flex justify-between items-center'>
            <Grid item className='flex items-center gap-3'>
                <img src={feature.icon} alt={feature.title} />
                <Grid>
                    <Typography className='!text-lg !font-normal' sx={{color:theme.palette.mode === "dark"? "#1B70F1" :"#193E79"}}>{feature.title}</Typography>
                    <Typography className='!text-sm !font-normal' sx={{color:"#8790A0"}}> {feature.subTitle}</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <img src={feature.starIcon} style={{cursor:"pointer"}} />
            </Grid>
           </Grid>
           <Grid className='flex justify-between items-center mt-8' sx={{height:"84px",padding:"12px 10px",background:theme.palette.mode==="dark" ? "#161A26":"#FAFBFF"}}>
           <Grid item>
                <img src={feature.graphIcon} />
            </Grid>
            <Grid item className='flex items-center gap-3'>
                <Grid>
                    <Typography className='!text-lg !font-semibold' sx={{color:theme.palette.mode === "dark"? "#1B70F1" :"#193E79"}}>$76.49210</Typography>
                    <Typography className='!text-sm !font-normal' sx={{color:"#15D28F"}}>+08.67%</Typography>
                </Grid>
            </Grid>
           </Grid>
          </Box>
        </Grid>
      ))}
    </Grid>
  
    </Container>
  </section>
  );
};

export default MarketDashboardCard;
