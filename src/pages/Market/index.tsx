
import { useTheme } from '@mui/material';
import CommonPage from '../../components/pages/CommonPage';
import MarketDashboardCard from './components/MarketDashboardCard';
import MarketDashboardTable from './components/MarketDashboardTable';

const MarketPage: React.FC = () => {
    const theme = useTheme();
    return (
    <CommonPage>
        <div className={`MarketDashboardBG ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`} style={{background:theme.palette.mode==="dark"? "transparent" : "#F7F9FC"}}>
        <MarketDashboardCard />
        <MarketDashboardTable />
        </div>
        <style>
        {`
          .MarketDashboardBG {
            position: relative;
          }

          .MarketDashboardBG.darkThemeClass::before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 10%;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 0.7;
            z-index: -1;
            width: 500px;
            height: 500px;
            filter: blur(200px);
          }

          @media (max-width:768px) {
        .MarketDashboardBG::before {
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
    </CommonPage>
    );
};
export default MarketPage;
