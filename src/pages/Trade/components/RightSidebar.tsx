import React from "react";
import { Box, Typography, Tab, Tabs, TextField, Divider, Grid, Button } from "@mui/material";
import {  styled } from "@mui/system";
import { useTheme, MenuItem, Select, InputAdornment, } from '@mui/material';
import OrderBookProgressBarSection from "./OrderBookProgressBarSection";
const currencies = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' }
 ];
 
 const cryptos = [
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
  { value: 'LTC', label: 'LTC' }
 ];

const Icon1 = "./assets/Market/btc.png";

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-flexContainer": {

    gap:"10px",
   alignItems:"center"
  },
  "& .MuiTabs-indicator": {
    bottom: "10px",
    background:"#1B70F1"
  },
});

const CustomTab = styled(Tab)({
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

const RightSidebar: React.FC<{ className?: string }> = ({ className }) => {
  const [tab, setTab] = React.useState(0);
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  const textFieldStyles = {
    backgroundColor: isLightTheme ? 'transparent' : '#000000',
    color: isLightTheme ? 'black' : 'white',
  };
 


  return (
    <section className={`HeroBackground ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`} style={{height:"100vh"}}>
    <Box className={`${className} m-8 overflow-y-auto`}>
      <Box sx={{ bgcolor: "background.paper", marginBottom:"32px" }}>
        <div className="flex justify-between items-center px-6 py-6 !pt-4">
          <div className="flex gap-2 items-center">
            <img src={Icon1} />
            Bitcoin/BTC
          </div>
          <div style={{ color: "#15D28F" }}>+5.48%</div>
        </div>

        <div className="Instant_limit">
          <div className="flex justify-center items-center">
            <CustomTabs
              value={tab}
              onChange={(_e, val) => setTab(val)}
            >
              <CustomTab label="Instant" value={0} /> 
              <Divider sx={{border:"1px solid #00000026", height:"25px", borderWidth:"1px"}} />
              <CustomTab label="Limit" value={1} />
            </CustomTabs>
          </div>
          <TabPanel value={tab} index={0}>
           <div className="Instant">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm	" style={{color:"#8790A0"}}> Balance: $65,287.52</div>
              <div className="text-sm	" style={{color:"#8790A0"}}>Add Amount</div>
            </div>

            <Box alignItems="center">
              <Grid item className="!mb-4 p-1" 
              sx={{border:theme.palette.mode=="dark"?"1px solid rgba(255, 255, 255, 0.208)":"transparent",borderRadius:"6px" ,background:theme.palette.mode=="dark"?"transparent":"#F7FAFF"}}
              >
                <TextField
                  variant="outlined"
                  placeholder="$ 20,000"
                  style={textFieldStyles}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.MuiInputBase-adornedEnd': {
                        paddingRight: "10px",
                        // color: theme.palette.primary.light,
                      },
                    },
                  }}

                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          defaultValue="USD"
                          sx={{ 
                            backgroundColor: isLightTheme ? 'transparent' : '#000000',
                            '& .MuiSelect-select': {
                              padding: '6px 10px',
                              background:theme.palette.mode === "dark" ? "#393939" : "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                              color:"#fff",
                          
                            },
                          }}
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item className="!mb-8 p-1" sx={{border:theme.palette.mode=="dark"?"1px solid rgba(255, 255, 255, 0.208)":"transparent",borderRadius:"6px" ,background:theme.palette.mode=="dark"?"transparent":"#F7FAFF"}}>
                <TextField
                  variant="outlined"
                  placeholder="₿ 0.31"
                  style={textFieldStyles}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.MuiInputBase-adornedEnd': {
                        paddingRight: '10px',
                       
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          defaultValue="BTC"
                          sx={{ 
                            backgroundColor: isLightTheme ? 'transparent' : '#000000',
                            '& .MuiSelect-select': {
                              padding: '6px 10px',
                              background:theme.palette.mode === "dark" ? "#393939" : "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                              color:"#fff",
                              
                            },
                          }}
                        >
                          {cryptos.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item className="block"> 
              <Button variant="outlined" className="w-full block !mb-4 !py-3"
               sx={{
                background:"#15D28F",
                color:"#fff",
                border:"none",
                "&:hover": {
                background: "#15D28F",
                border:"none",
              
              },}}
          >Buy BTC</Button>
              <Button variant="outlined" className="w-full block !py-3" 
              sx={{
              background:"#EA3B5A",
              color:"#fff",
              border:"none",
              "&:hover": {
              background: "#EA3B5A",
              border:"none",
            
            },}} >Sell BTC</Button>
              </Grid>

            </Box>


           </div>
           
          </TabPanel>
          <TabPanel value={tab} index={1}>
          <div className="Limit">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm	" style={{color:"#8790A0"}}> Balance: $65,287.52</div>
              <div className="text-sm	" style={{color:"#8790A0"}}>Add Amount</div>
            </div>

            <Box alignItems="center">
              <Grid item className="!mb-4 p-1" 
              sx={{border:theme.palette.mode=="dark"?"1px solid rgba(255, 255, 255, 0.208)":"transparent",borderRadius:"6px" ,background:theme.palette.mode=="dark"?"transparent":"#F7FAFF"}}
              >
                <TextField
                  variant="outlined"
                  placeholder="$ 20,000"
                  style={textFieldStyles}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.MuiInputBase-adornedEnd': {
                        paddingRight: "10px",
                        // color: theme.palette.primary.light,
                      },
                    },
                  }}

                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          defaultValue="USD"
                          sx={{ 
                            backgroundColor: isLightTheme ? 'transparent' : '#000000',
                            '& .MuiSelect-select': {
                              padding: '6px 10px',
                              background:theme.palette.mode === "dark" ? "#393939" : "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                              color:"#fff",
                          
                            },
                          }}
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item className="!mb-8 p-1" sx={{border:theme.palette.mode=="dark"?"1px solid rgba(255, 255, 255, 0.208)":"transparent",borderRadius:"6px" ,background:theme.palette.mode=="dark"?"transparent":"#F7FAFF"}}>
                <TextField
                  variant="outlined"
                  placeholder="₿ 0.31"
                  style={textFieldStyles}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.MuiInputBase-adornedEnd': {
                        paddingRight: '10px',
                       
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          defaultValue="BTC"
                          sx={{ 
                            backgroundColor: isLightTheme ? 'transparent' : '#000000',
                            '& .MuiSelect-select': {
                              padding: '6px 10px',
                              background:theme.palette.mode === "dark" ? "#393939" : "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                              color:"#fff",
                              
                            },
                          }}
                        >
                          {cryptos.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item className="block"> 
              <Button variant="outlined" className="w-full block !mb-4 !py-3"
               sx={{
                background:"#15D28F",
                color:"#fff",
                border:"none",
                "&:hover": {
                background: "#15D28F",
                border:"none",
              
              },}}
          >Buy BTC</Button>
              <Button variant="outlined" className="w-full block !py-3" 
              sx={{
              background:"#EA3B5A",
              color:"#fff",
              border:"none",
              "&:hover": {
              background: "#EA3B5A",
              border:"none",
            
            },}} >Sell BTC</Button>
              </Grid>

            </Box>


           </div>
          </TabPanel>
        </div>
        
      </Box>
      <Box sx={{ bgcolor: "background.paper" }}>
       <OrderBookProgressBarSection />
      </Box>
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

export default RightSidebar;
