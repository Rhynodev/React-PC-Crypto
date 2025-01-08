import React from 'react';
import { Grid, useTheme, Divider } from '@mui/material';
const QuillDown = "./assets/Market/quill_arrow-down.png"
const LossGraph = "./assets/Market/LossGraph.png";
const starIcon = "./assets/Market/starIcon.png";
const Icon1 = "./assets/Market/btc.png";

const cryptoData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    currentPrice: "$65382.80",
    volume: "$65382.80",
    marketcap: "$65382.80",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon1,
    favIcon:starIcon
  },
  
];


const TopBar: React.FC = () => {
  const theme = useTheme();

  return (

        <Grid item spacing={4} py={4} className='my-8 '>
          <Grid item className="shadow rounded" style={{ background: theme.palette.mode === "dark" ? "transparent" : "#ffffff", border: theme.palette.mode === "dark" ? "1px solid #ffffff35" : "1px solid #ffffff23" }}>
          {cryptoData.map((crypto, index) => (
           
            <div  key={index} className="flex px-6 py-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <div className='1 flex items-center gap-4'>
                <img src={crypto.favIcon} alt="Star Icon" style={{cursor:"pointer"}} />
              </div>
              <div className='2 flex items-center gap-4'>
                <img src={crypto.icon} alt={`${crypto.name} Icon`} />
                <div>
                  <div className='text-base font-normal pb-1' style={{ color: theme.palette.text.secondary }}>{crypto.name}</div>
                </div>
              </div>
              <div className='3'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>Price (INR)</div>
                <div className='text-base font-normal' style={{ color: theme.palette.text.secondary }}>$65382.80 &nbsp;<span className='text-sm	' style={{color:"#15D28F"}}>+12%</span></div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Divider sx={{border:"1px solid #00000026", height:"50px", borderWidth:"1px"}} />
              <div className='4'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>High Low(24h) &nbsp;<span className='text-sm	' style={{color:"#15D28F"}}>+19%</span></div>
                <div className='text-base font-normal' style={{ color: theme.palette.text.secondary }}> $67,287.64</div>
              </div>  
              <Divider sx={{border:"1px solid #00000026", height:"50px", borderWidth:"1px"}} />
              <div className='5'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>Market Cap(24h) &nbsp;<span className='text-sm	' style={{color:"#15D28F"}}>+19%</span></div>
                <div className='text-base font-normal' style={{ color: theme.palette.text.secondary }}>$ 1,280.36B USD</div>
              </div>  
              <Divider sx={{border:"1px solid #00000026", height:"50px", borderWidth:"1px"}} />
              <div className='6'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>Volume(24h) &nbsp;<span className='text-sm	' style={{color:"#15D28F"}}>+40%</span></div>
                <div className='text-base font-normal' style={{ color: theme.palette.text.secondary }}>$ 1,280.36B USD</div>
              </div>
            </div>

            </div>
           
          ))}
          </Grid>
          
        
        </Grid>
    

  
  );
};

export default TopBar;
