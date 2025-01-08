

import React, { useState } from 'react';
import { Grid, Typography,useTheme } from '@mui/material';
import PortfolioList from './PortfolioList';

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('All');
  return (
    <section className={`PoerfolioBackground ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`} >
   
    <Grid spacing={4} justifyContent="center">
    <Grid item xs={12} sm={6} md={12}>
    <div className="flex justify-between items-center px-6 py-6 shadow rounded" style={{background:theme.palette.mode==="dark"?"#222E3D59":"#ffffff", border:theme.palette.mode==="dark"?"1px solid #ffffff35":"1px solid #ffffff"}}>
      <div className="">
        <Typography className='!text-2xl	!font-semibold pb-1' sx={{color:theme.palette.mode==="dark"?"#1B70F1":"#193E79"}}>24h Trading Volume:</Typography>
        <Typography sx={{color:theme.palette.primary.light}}>$2,932,933</Typography>
      </div>
      <div className="flex justify-center">
        {['All', 'Trending', 'Losers', 'Others'].map((tab) => (
          <button
            key={tab}
         
            className={`px-4 py-2 -mb-px rounded text-base	${
              activeTab === tab
                ? 'text-white font-normal bg-gradient-to-r from-[#1DA1F2] to-[#009FFC]'
                : 'text-[#8790A0] '
            } focus:outline-none`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    
    </div>
    <div className="">
        {activeTab === 'All' && <div>
          <PortfolioList />
          </div>}
        {activeTab === 'Trending' && <div>
          {/* Trending Content */}
          <PortfolioList />
          </div>}
        {activeTab === 'Losers' && <div>
          {/* Losers Content */}
          <PortfolioList />
          </div>}
        {activeTab === 'Others' && <div>
          {/* Others Content */}
          <PortfolioList />
          </div>}
      </div>
    </Grid>
    </Grid>
   
    <style>
        {`
          .PoerfolioBackground {
            position: relative;
          }

            .PoerfolioBackground.lightThemeClass::before {
            content: '';
            position: absolute;
            left: 0;
            top: 25%;
            background: linear-gradient(90deg, rgba(252, 0, 255, 0.35) 0%, rgba(0, 219, 222, 0.35) 100%);
            opacity: 0.7;
            z-index: -1;
            width: 500px;
            height: 500px;
            filter: blur(200px);
          }

          .PoerfolioBackground.darkThemeClass::before {
            content: '';
            position: absolute;
            left: 0;
            top: 25%;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 0.7;
            z-index: -1;
            width: 500px;
            height: 500px;
            filter: blur(200px);
          }

          @media (max-width:768px) {
        .PoerfolioBackground::before {
             content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            background: transparent;
            opacity: 0.7;
            z-index: -1;
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

export default Portfolio;
