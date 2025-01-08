import CommonPage from '../../components/pages/CommonPage';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import WalletLeftTabsBar from './components/WalletLeftTabsBar';
import WalletTopBar from './components/WalletTopBar';
import { useTheme } from '@mui/material';
import WalletOverview from './components/WalletOverview';
import MainWallet from './components/MainWallet';

const WalletPage: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Wallet Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Wallet Overview":
        return <div>
          <WalletOverview />
        </div>;
      case "Main Wallet":
        return <div>
          <MainWallet />
        </div>;
      case "Trade Wallet":
        return <div>
           <MainWallet />
        </div>;
      case "Financial Wallet":
        return <div>Financial Wallet Content</div>;
      case "Wallet History":
        return <div>Wallet History Content</div>;
      default:
        return null;
    }
  };

  console.log('activeTab',activeTab)
  return (
    <CommonPage>
      <div className={`WalletDashboardBG ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`} style={{ background: theme.palette.mode === "dark" ? "transparent" : "#F7F9FC" }}>
        <Box className="flex h-screen ScreenLayout">
          <Box className="w-full">
            <div className="flex w-full">
              <div>
                <WalletLeftTabsBar className="w-72" onTabSelect={setActiveTab} />
              </div>
              <div style={{ height: "100%", width: "100%", marginRight: "32px" }}>
                <WalletTopBar />
                <Box className="flex-1" sx={{ height: "560px", width: "100%" }}>
                  {renderContent()}
                </Box>
              </div>
            </div>
          </Box>
        </Box>
      </div>

      <style>
        {`
          .ScreenLayout {
            width: 100%;
            margin: auto;
            height: auto;
            min-height: 100vh;
            display: flex;
            justify-items: center;
          }

          .WalletDashboardBG {
            position: relative;
          }

          .WalletDashboardBG.darkThemeClass::before {
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

          @media (max-width: 768px) {
            .WalletDashboardBG::before {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              background: transparent;
              opacity: 0.7;
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

export default WalletPage;
