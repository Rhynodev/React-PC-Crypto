// import React from 'react';
// import { Box, Tabs, Tab, Typography } from '@mui/material';

// const BottomTabs: React.FC = () => {
//   const [tab, setTab] = React.useState(0);

//   return (
//     <Box className="m-8 border-t border-gray-200">
//       <Tabs value={tab} onChange={(e, val) => setTab(val)}>
//         <Tab label="Portfolio" />
//         <Tab label="Watchlist" />
//         <Tab label="Open Order" />
//         <Tab label="Order History" />
//       </Tabs>
//       <Box className="p-4">
//         {tab === 0 && <Typography>Portfolio Content</Typography>}
//         {tab === 1 && <Typography>Watchlist Content</Typography>}
//         {tab === 2 && <Typography>Open Order Content</Typography>}
//         {tab === 3 && <Typography>Order History Content</Typography>}
//       </Box>
//     </Box>
//   );
// };

// export default BottomTabs;



import React, { useState } from 'react';
import {Grid,useTheme } from '@mui/material';
import PortfolioList from './PortfolioList';

const BottomTabs: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('Portfolio');


  return (
    <section>
  
    <Grid spacing={4} justifyContent="center" pb={8}>
    <Grid item xs={12} sm={6} md={12} pl={4}>
    <div className="flex justify-between items-center px-6 py-6 shadow rounded" style={{background:theme.palette.mode==="dark"?"#222E3D59":"#ffffff", border:theme.palette.mode==="dark"?"1px solid #ffffff35":"1px solid #ffffff"}}>
     
      <div className="flex justify-center">
        {['Portfolio', 'Watchlist', 'Open Order', 'Order History'].map((tab) => (
          <button
            key={tab}
         
            className={`px-4 py-2 -mb-px rounded text-base	${
              activeTab === tab
                ? 'text-[#1DA1F2] font-normal '
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
        {activeTab === 'Portfolio' && <div>
          <PortfolioList />
          </div>}
        {activeTab === 'Watchlist' && <div>
          <PortfolioList />
          </div>}
        {activeTab === 'Open Order' && <div>
          <PortfolioList />
          </div>}
        {activeTab === 'Order History' && <div>
          <PortfolioList />
          </div>}
      </div>
    </Grid>
    </Grid>
   
   
  </section>
  );
};

export default BottomTabs;
