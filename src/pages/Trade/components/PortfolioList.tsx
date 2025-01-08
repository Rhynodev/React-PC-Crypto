

import React from 'react';
import { Grid, useTheme, Divider } from '@mui/material';
const QuillUp = "./assets/Market/quill_arrow-up.png"
const QuillDown = "./assets/Market/quill_arrow-down.png"
const LossGraph = "./assets/Market/LossGraph.png";
const ProfitGraph = "./assets/Market/ProfitGraph.png";
const starIcon = "./assets/Market/starIcon.png";
const starIconFill = "./assets/Market/starIconFill.png";
const Icon1 = "./assets/Market/btc.png";
const Icon2 = "./assets/Market/xzc.png";
const Icon3 = "./assets/Market/lsk.png";
const Icon4 = "./assets/Market/nano.png";

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
  {
    id: 2,
    name: "Zcoin",
    symbol: "XZC",
    currentPrice: "$3.94",
    volume: "$3.94",
    marketcap: "$3.94",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon2,
    favIcon:starIconFill
  },
  {
    id: 3,
    name: "ZClassic",
    symbol: "ZCL",
    currentPrice: "$0.04982",
    volume: "$3.94",
    marketcap: "$462,676.75",
    change: "+12%",
    changeIcon: QuillUp,
    graph: ProfitGraph,
    icon: Icon3,
    favIcon:starIcon
  },
  {
    id: 4,
    name: "Nano",
    symbol: "NNO",
    currentPrice: "$0.04982",
    volume: "$3.94",
    marketcap: "$462,676.75",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon4,
    favIcon:starIconFill
  },
  
  
];



const AllContentTab: React.FC = () => {
  const theme = useTheme();

  return (
  

        <Grid item spacing={4} py={1}>
          <Grid item className="rounded" style={{ background: theme.palette.mode === "dark" ? "transparent" : "#ffffff", border: theme.palette.mode === "dark" ? "1px solid #ffffff35" : "1px solid #ffffff23" }}>
          {cryptoData.map((crypto, index) => (
            <>
            <div  key={index} className="flex px-6 py-8 justify-between items-center">
              
              <div className='2 flex items-center gap-4'>
                <img src={crypto.icon} alt={`${crypto.name} Icon`} />
                <div>
                  <div className='text-base font-normal pb-1' style={{ color: theme.palette.text.secondary }}>{crypto.name}</div>
                  <div className='text-base font-normal' style={{ color: theme.palette.primary.light }}>{crypto.symbol}</div>
                </div>
              </div>
              <div className='3'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>Current Price</div>
                <div className='text-base font-normal' style={{ color: theme.palette.text.secondary }}>{crypto.currentPrice}</div>
              </div>
              <div className='4'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>Volume (1h)</div>
                <div className='text-base font-normal' style={{ color: theme.palette.text.secondary }}>{crypto.volume}</div>
              </div>
              <div className='5'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>Marketcap(24h)</div>
                <div className='text-base font-normal' style={{ color: theme.palette.text.secondary }}>{crypto.marketcap}</div>
              </div>
              <div className='6'>
                <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>24h (Change)</div>
                <div className='flex'>
                  <img src={crypto.changeIcon} alt="Change Icon" />
                  <div className='text-base font-normal' style={{ color: crypto.change.startsWith('-') ? "#EA3B5A" : "#15D28F" }}>{crypto.change}</div>
                </div>
              </div>
              <div className='7'>
                <img src={crypto.graph} alt="Graph" />
              </div>
            </div>
           {index < cryptoData.length - 1 && <Divider />}     
            </>
          ))}
          </Grid>
         

        </Grid>
    

  
  );
};

export default AllContentTab;
