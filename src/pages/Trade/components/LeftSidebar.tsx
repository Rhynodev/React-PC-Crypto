import React from "react";
import { Box, Typography } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import CurrenciesList from "./CurrenciesList";

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-scrollButtons": {
    width: "25px",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const CustomTab = styled(Tab)({
  minWidth: "40px !important",
  padding: "0px 8px !important",
  paddingLeft: "0px !important",
  "&.Mui-selected": {
    borderBottom: "none !important",
    fontWeight: "700",
    color: "#039FFB",
  },
});



interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
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

const LeftSidebar: React.FC<{ className?: string }> = ({ className }) => {
  const currencies = [
    "USD",
    "INR",
    "ETH",
    "SRM",
    "Other",
    "Dash",
    "Item1",
    "Item2",
  ];
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box className={`${className} m-8 overflow-y-auto`} style={{height:"678px", overflow:"auto", scrollbarWidth:"none"}}>
     
      <Box sx={{ bgcolor: "background.paper" }}>
        <CustomTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {currencies.map((currency) => (
            <CustomTab key={currency} label={currency} />
          ))}
        </CustomTabs>

     

        {currencies.map((currency, index) => (
          <TabPanel key={index} value={value} index={index}>
            Content for {currency} 
            <CurrenciesList />
          </TabPanel>
        ))}
        
      </Box>
    </Box>
  );
};

export default LeftSidebar;
