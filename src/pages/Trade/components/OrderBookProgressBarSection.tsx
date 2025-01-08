import React from "react";
import { Box, Typography, Tab, Tabs, } from "@mui/material";
import {  styled } from "@mui/system";
import { useTheme } from '@mui/material';


const CustomOrderBookTabs = styled(Tabs)({
  "& .MuiTabs-flexContainer": {

    gap:"10px",
   alignItems:"center"
  },
  "& .MuiTabs-indicator": {
    bottom: "10px",
    background:"#1B70F1"
  },
});

const CustomOrderBookTab = styled(Tab)({
  minWidth: "40px !important",
  color:"#8790A0",
  textTransform:"capitalize",
  "&.Mui-selected": {
  color: "#1B70F1",
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const data = [
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  { amount: '30,58,254.95', rate: '0.98521', total: '28,654,36.9651' },
  

];

const TabPanels: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const OrderBookProgressBarSection: React.FC<{ className?: string }> = () => {
  const [orderBookTab, setOrderBookTab] = React.useState(0);
  const theme = useTheme();


  return (
    <section className={`HeroBackground ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`}>
   <Box sx={{ bgcolor: "background.paper",}}>
        <div className="flex justify-between items-center px-6 py-6 !pt-4 !pb-0">
          <div className="flex items-center">
          Order Book
          </div>
        
        </div>

        <div className="Instant_limit">
          <div className="flex justify-center items-center">
            <CustomOrderBookTabs
              value={orderBookTab}
              onChange={(_e, val) => setOrderBookTab(val)}
            >
              <CustomOrderBookTab label="All" value={0} /> 
              <CustomOrderBookTab label="Asks" value={1} />
              <CustomOrderBookTab label="Bids" value={2} />
            </CustomOrderBookTabs>
          </div>
          <TabPanels value={orderBookTab} index={0}>
           <div className="All">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm" style={{color:"#8790A0"}}> Price</div>
              <div className="text-sm" style={{color:"#8790A0"}}>Qty.</div>
              <div className="text-sm" style={{color:"#8790A0"}}>Total</div>
            </div>

            <div className="order_data">
              {data.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                   <div className="text-xs" style={{ color: '#EA3B5A',lineHeight:"16.4px" }}>{item.amount}</div>
                  <div className="text-xs" style={{ color: '#8790A0',lineHeight:"16.4px" }}>{item.rate}</div>
                  <div className="text-xs" style={{ color: '#8790A0',lineHeight:"16.4px" }}>{item.total}</div>
                </div>
              ))}
            </div>

           </div>
          </TabPanels>
          <TabPanels value={orderBookTab} index={1}>
          <div className="Asks">
          <div className="flex justify-between items-center mb-6">
              <div className="text-sm" style={{color:"#8790A0"}}> Price</div>
              <div className="text-sm" style={{color:"#8790A0"}}>Qty.</div>
              <div className="text-sm" style={{color:"#8790A0"}}>Total</div>
            </div>

            <div className="order_data">
              {data.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <div className="text-xs" style={{ color: '#EA3B5A',lineHeight:"16.4px" }}>{item.amount}</div>
                  <div className="text-xs" style={{ color: '#8790A0',lineHeight:"16.4px" }}>{item.rate}</div>
                  <div className="text-xs" style={{ color: '#8790A0',lineHeight:"16.4px" }}>{item.total}</div>
                </div>
              ))}
            </div>
           </div>
          </TabPanels>
          <TabPanels value={orderBookTab} index={2}>
          <div className="Bids">
          <div className="flex justify-between items-center mb-6">
              <div className="text-sm" style={{color:"#8790A0"}}> Price</div>
              <div className="text-sm" style={{color:"#8790A0"}}>Qty.</div>
              <div className="text-sm" style={{color:"#8790A0"}}>Total</div>
            </div>

            <div className="order_data">
              {data.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                     <div className="text-xs" style={{ color: '#EA3B5A',lineHeight:"16.4px" }}>{item.amount}</div>
                  <div className="text-xs" style={{ color: '#8790A0',lineHeight:"16.4px" }}>{item.rate}</div>
                  <div className="text-xs" style={{ color: '#8790A0',lineHeight:"16.4px" }}>{item.total}</div>
                </div>
              ))}
            </div>
           </div>
          </TabPanels>
        </div>
        
      </Box>
    <style>
        {`
.MuiAutocomplete-popupIndicator{
  display:none !important;
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

export default OrderBookProgressBarSection;
