

import React from 'react';
import { Grid, Typography, useTheme, Divider } from '@mui/material';
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
const Icon5 = "./assets/Market/nmc.png";
const Icon6 = "./assets/Market/nuls.png";
const Icon7 = "./assets/Market/nxs.png";
const Icon8 = "./assets/Market/emc.png";
const Icon9 = "./assets/Market/zcl.png";

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
  {
    id: 5,
    name: "Solaris",
    symbol: "XLR",
    currentPrice: "$65382.80",
    volume: "$65382.80",
    marketcap: "$65382.80",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon5, 
    favIcon:starIconFill
  },
  {
    id: 6,
    name: "Nuls",
    symbol: "NUS",
    currentPrice: "$3.94",
    volume: "$3.94",
    marketcap: "$3.94",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon6,
    favIcon:starIconFill
  },
  {
    id: 7,
    name: "NIX",
    symbol: "NLX",
    currentPrice: "$0.04982",
    volume: "$3.94",
    marketcap: "$462,676.75",
    change: "+12%",
    changeIcon: QuillUp,
    graph: ProfitGraph,
    icon: Icon7, 
    favIcon:starIcon
  },
  {
    id: 8,
    name: "Emercoin",
    symbol: "EMC",
    currentPrice: "$0.04982",
    volume: "$3.94",
    marketcap: "$462,676.75",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon8,
    favIcon:starIconFill
  },
  {
    id: 9,
    name: "Lisk",
    symbol: "LSK",
    currentPrice: "$65382.80",
    volume: "$65382.80",
    marketcap: "$65382.80",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon9,
    favIcon:starIcon
  },
  {
    id: 10,
    name: "Nexus",
    symbol: "NXS",
    currentPrice: "$3.94",
    volume: "$3.94",
    marketcap: "$3.94",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon1,
    favIcon:starIconFill
  },
  {
    id: 11,
    name: "Namecoin",
    symbol: "NMC",
    currentPrice: "$0.04982",
    volume: "$3.94",
    marketcap: "$462,676.75",
    change: "+12%",
    changeIcon: QuillUp,
    graph: ProfitGraph,
    icon: Icon2,
    favIcon:starIcon
  },
  {
    id: 12,
    name: "Baofl",
    symbol: "BLF",
    currentPrice: "$0.04982",
    volume: "$3.94",
    marketcap: "$462,676.75",
    change: "-12%",
    changeIcon: QuillDown,
    graph: LossGraph,
    icon: Icon3, 
    favIcon:starIconFill
  },
];



const AllContentTab: React.FC = () => {
  const theme = useTheme();

  return (
  

        <Grid item spacing={4} py={4}>
          <Grid item className="shadow rounded" style={{ background: theme.palette.mode === "dark" ? "transparent" : "#ffffff", border: theme.palette.mode === "dark" ? "1px solid #ffffff35" : "1px solid #ffffff23" }}>
          {cryptoData.map((crypto, index) => (
            <>
            <div  key={index} className="flex px-6 py-8 justify-between items-center">
              <div className='1 flex items-center gap-4'>
                <img src={crypto.favIcon} alt="Star Icon" style={{cursor:"pointer"}} />
                <Typography className='text-base font-normal' sx={{ color: theme.palette.primary.light }}>{crypto.id}</Typography>
              </div>
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
          <button className=" text-white font-normal py-4 px-6 rounded mt-12 text-center flex m-auto" style={{background:"linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)"}}>
            Load More
          </button>

        </Grid>
    

  
  );
};

export default AllContentTab;
