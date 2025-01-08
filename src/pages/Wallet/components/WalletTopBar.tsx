
import React from 'react';
import { Grid, useTheme,Button, } from '@mui/material';

const WalletTopBar: React.FC = () => {
  const theme = useTheme();

  return (
        <Grid item spacing={4} py={4} className='my-8 '>
          <Grid item className="shadow rounded" style={{ background: theme.palette.mode === "dark" ? "transparent" : "#ffffff", border: theme.palette.mode === "dark" ? "1px solid #ffffff35" : "1px solid #ffffff23" }}>
        
           
            <div  className="flex px-6 py-4 justify-between items-center">
            <div className="flex items-center gap-6">
             
              <div className='4'>
                <div className='text-base font-medium	 pb-1' style={{ color: theme.palette.mode=="dark" ?"#1B70F1":"#193E79" }}>Wallet  Balance</div>
                <div className='text-base font-normal' style={{color:"#8790A0" }}>$200.00</div>
              </div>  
         
              <div className='5'>
                <div className='text-base font-medium	 pb-1' style={{ color: theme.palette.mode=="dark" ?"#1B70F1":"#193E79" }}>Available Balance</div>
                <div className='text-base font-normal' style={{ color:"#8790A0"}}>$200.00</div>
              </div>  
        
              <div className='6'>
                <div className='text-base font-medium	 pb-1' style={{ color: theme.palette.mode=="dark" ?"#1B70F1":"#193E79" }}>Unavailable Balance</div>
                <div className='text-base font-normal' style={{ color:"#8790A0" }}>$200.00</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
            

              <Grid item className="flex items-center gap-4"> 
              <Button variant="outlined" 
               sx={{
                background:"transparent",
                textTransform:"capitalize",
                color:"#1B70F1",
                border:"1px solid #1B70F1",
                "&:hover": {
                background: "transparent",
                border:"1px solid #1B70F1",
              },}}>Deposit</Button>
              <Button variant="outlined" 
              sx={{
              background:"#1B70F1",
              textTransform:"capitalize",
              color:"#fff",
              border:"none",
              "&:hover": {
              background: "#1B70F1",
              border:"none",
            
            },}} >Withdraw</Button>
              </Grid>

            </div>

         

            </div>
           
      
          </Grid>
          
        
        </Grid>
    

  
  );
};

export default WalletTopBar;
