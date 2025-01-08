import React from 'react';
import { Grid, useTheme, Divider,Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const MainWallet: React.FC = () => {
  const theme = useTheme();

  const walletData = [
    {
      coinName: 'USDT/Tether',
      total: 'USDT 3.841898 / $290.81',
      available: 'USDT 3.841898 / $290.81',
      orders: 'USDT 3.841898 / $290.81'
    },
    {
      coinName: 'BTC/Bitcoin',
      total: 'BTC 0.123456 / $4200.00',
      available: 'BTC 0.123456 / $4200.00',
      orders: 'BTC 0.123456 / $4200.00'
    },
    {
      coinName: 'ETH/Ethereum',
      total: 'ETH 1.234567 / $3600.00',
      available: 'ETH 1.234567 / $3600.00',
      orders: 'ETH 1.234567 / $3600.00'
    },
    {
      coinName: 'XRP/Ripple',
      total: 'XRP 500.1234 / $250.00',
      available: 'XRP 500.1234 / $250.00',
      orders: 'XRP 500.1234 / $250.00'
    },
    {
      coinName: 'LTC/Litecoin',
      total: 'LTC 5.678901 / $1000.00',
      available: 'LTC 5.678901 / $1000.00',
      orders: 'LTC 5.678901 / $1000.00'
    },
    {
      coinName: 'ADA/Cardano',
      total: 'ADA 1000.9876 / $1200.00',
      available: 'ADA 1000.9876 / $1200.00',
      orders: 'ADA 1000.9876 / $1200.00'
    },
    {
      coinName: 'DOT/Polkadot',
      total: 'DOT 200.4567 / $800.00',
      available: 'DOT 200.4567 / $800.00',
      orders: 'DOT 200.4567 / $800.00'
    },
    {
      coinName: 'DOGE/Dogecoin',
      total: 'DOGE 10000.1234 / $400.00',
      available: 'DOGE 10000.1234 / $400.00',
      orders: 'DOGE 10000.1234 / $400.00'
    }
  ];

  return (
    <Grid item spacing={4} className="" style={{border:theme.palette.mode=="dark"?"1px solid rgb(217 217 217 / 26%)":"1px solid #F7F9FC"}}>
      <Grid item style={{background:theme.palette.mode === "dark" ? "#161A26" : "#fff"}}>
        <div className="flex px-6 py-4 justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="4">
              <div className="text-base font-normal pb-1" style={{ color: theme.palette.mode=="dark" ?"#1B70F1":"#193E79"}}>History</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Grid item className="flex items-center gap-4" style={{color:"#8790A0"}}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Hide Small Balance" />
              </FormGroup>
            </Grid>
          </div>
        </div>
        <Divider />
        <div className="overflow-x-auto">
          <table className="min-w-full" >
            <thead style={{borderBottom:theme.palette.mode=="dark"?"1px solid rgb(217 217 217 / 26%)":"1px solid rgba(0, 0, 0, 0.12)"}}>
              <tr >
                <th style={{ color:"#8790A0" }} className="px-6 py-4 text-left text-xs font-medium  capitalize tracking-wider">Coin Name</th>
                <th style={{ color:"#8790A0" }} className="px-6 py-4 text-left text-xs font-medium  capitalize tracking-wider">Total</th>
                <th style={{ color:"#8790A0" }} className="px-6 py-4 text-left text-xs font-medium  capitalize tracking-wider">Available</th>
                <th style={{ color:"#8790A0" }} className="px-6 py-4 text-left text-xs font-medium  capitalize tracking-wider">Orders</th>
                <th style={{ color:"#8790A0" }} className="px-6 py-4 text-left text-xs font-medium  capitalize tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {walletData.map((data, index) => (
                <tr key={index} style={{borderBottom:theme.palette.mode=="dark"?"1px solid rgb(217 217 217 / 26%)":"1px solid rgba(0, 0, 0, 0.12)"}}>
                  <td style={{ color:"#8790A0" }} className="px-6 py-4 whitespace-nowrap text-base font-medium">{data.coinName}</td>
                  <td style={{ color:"#8790A0" }} className="px-6 py-4 whitespace-nowrap text-base">{data.total}</td>
                  <td style={{ color:"#8790A0" }} className="px-6 py-4 whitespace-nowrap text-base">{data.available}</td>
                  <td style={{ color:"#8790A0" }} className="px-6 py-4 whitespace-nowrap text-base">{data.orders}</td>
                  <td style={{ color:"#8790A0" }} className="px-6 py-4 whitespace-nowrap text-base font-medium">
                    <a href="#" className="">Deposit</a> | <a href="#" className="">Withdraw</a> | <a href="#" className="">Transfer</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center px-6 !py-6 ">
        
          <div className="flex gap-6 items-center	justify-center m-auto	text-center">
           <Button variant='outlined' className="!px-4 !py-2 !capitalize"><ChevronLeftIcon /> Prev</Button>
       <div className="flex items-center gap-2	justify-center	text-center">
            <Button variant='contained' className="!px-2 !py-2 !min-w-12 bg-blue-500 text-white ">1</Button>
            <Button variant='outlined' className="!px-2 !py-2 !min-w-12 ">2</Button>
            <Button variant='outlined' className="!px-2 !py-2 !min-w-12 ">3</Button>
            <Button variant='outlined' className="!px-2 !py-2 !min-w-12 ">4</Button>
       </div>
            <Button variant='outlined' className="!px-4 !py-2 !capitalize"> Next <ChevronRightIcon /></Button>
          </div>
      
        </div>
      </Grid>
    </Grid>
  );
};

export default MainWallet;
