import React from "react";
import { Container, Grid, useTheme } from "@mui/material";
const CurrencyIcon1 = "./assets/png/bitcoin.png";
const CurrencyIcon2 = "./assets/png/ethereum.png";
const CurrencyIcon3 = "./assets/png/usdt.png";
const CurrencyIcon4 = "./assets/png/currencycoin.png";
const CurrencyIcon5 = "./assets/png/solana.png";
const CurrencyIcon6 = "./assets/png/polygon.png";
const CurrencySection: React.FC = () => {
  const theme = useTheme();
 
  return (
    <section className={`CurrencyBackground ${theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"}`}>
      <Container maxWidth="xl" className="p-0 m-0 !pl-0 !pr-0 pt-20 mt-16 pb-20">
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={2}>
            <div className="text-center">
              <img src={CurrencyIcon1} className="m-auto" />
              <div
                style={{ color: theme.palette.text.primary }}
                className="font-semibold	text-xl pt-2 pb-2"
              >
                Botcoin
              </div>
              <div
                className="flex p-2 px-4 mx-4 rounded justify-between items-center"
                style={{ boxShadow: "0px 0px 4px 0px #00000040", background:theme.palette.mode === "dark" ? "#FFFFFF1A" : "#FFFFFF80" }}
              >
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#452373",
                  }}
                >
                  0.117
                </span>
                <span style={{ color: "#EA3B5A" }}>-205%</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="text-center">
              <img src={CurrencyIcon2} className="m-auto" />
              <div
                style={{ color: theme.palette.text.primary }}
                className="font-semibold	text-xl pt-2 pb-2"
              >
                Ethereum
              </div>
              <div
                className="flex p-2 px-4 mx-4 rounded justify-between items-center"
                style={{ boxShadow: "0px 0px 4px 0px #00000040",background:theme.palette.mode === "dark" ? "#FFFFFF1A" : "#FFFFFF80" }}
              >
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#452373",
                  }}
                >
                  0.117
                </span>
                <span style={{ color: "#EA3B5A" }}>-205%</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="text-center">
              <img src={CurrencyIcon3} className="m-auto" />
              <div
                style={{ color: theme.palette.text.primary }}
                className="font-semibold	text-xl pt-2 pb-2"
              >
                USDT
              </div>
              <div
                className="flex p-2 px-4 mx-4 rounded justify-between items-center"
                style={{ boxShadow: "0px 0px 4px 0px #00000040",background:theme.palette.mode === "dark" ? "#FFFFFF1A" : "#FFFFFF80" }}
              >
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#452373",
                  }}
                >
                  0.117
                </span>
                <span style={{ color: "#EA3B5A" }}>-205%</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="text-center">
              <img src={CurrencyIcon4} className="m-auto" />
              <div
                style={{ color: theme.palette.text.primary }}
                className="font-semibold	text-xl pt-2 pb-2"
              >
                Dogecoin
              </div>
              <div
                className="flex p-2 px-4 mx-4 rounded justify-between items-center"
                style={{ boxShadow: "0px 0px 4px 0px #00000040",background:theme.palette.mode === "dark" ? "#FFFFFF1A" : "#FFFFFF80" }}
              >
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#452373",
                  }}
                >
                  0.117
                </span>
                <span style={{ color: "#EA3B5A" }}>-205%</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="text-center">
              <img src={CurrencyIcon5} className="m-auto" />
              <div
                style={{ color: theme.palette.text.primary }}
                className="font-semibold	text-xl pt-2 pb-2"
              >
                Solana
              </div>
              <div
                className="flex p-2 px-4 mx-4 rounded justify-between items-center"
                style={{ boxShadow: "0px 0px 4px 0px #00000040",background:theme.palette.mode === "dark" ? "#FFFFFF1A" : "#FFFFFF80" }}
              >
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#452373",
                  }}
                >
                  0.117
                </span>
                <span style={{ color: "#EA3B5A" }}>-205%</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="text-center">
              <img src={CurrencyIcon6} className="m-auto" />
              <div
                style={{ color: theme.palette.text.primary }}
                className="font-semibold	text-xl pt-2 pb-2"
              >
                Polygon
              </div>
              <div
                className="flex p-2 px-4 mx-4 rounded justify-between items-center"
                style={{ boxShadow: "0px 0px 4px 0px #00000040",background:theme.palette.mode === "dark" ? "#FFFFFF1A" : "#FFFFFF80" }}
              >
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#452373",
                  }}
                >
                  0.117
                </span>
                <span style={{ color: "#EA3B5A" }}>-205%</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <style>
        {`

          .CurrencyBackground.darkThemeClass {
            position: relative;
          }
          .CurrencyBackground.darkThemeClass::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 0.7;
            z-index: -1;
            width: 500px;
            height: 500px;
            filter: blur(200px);
          }

          @media (max-width:768px) {
        .CurrencyBackground::before {
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

    </section>
  );
};

export default CurrencySection;
