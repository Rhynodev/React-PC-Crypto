import React, { useState, useEffect, useRef } from "react";
// import moment from "moment";

// import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import { AdvancedChart } from "react-tradingview-embed";
// import {
//   XYPlot,
//   FlexibleXYPlot,
//   VerticalBarSeries,
//   VerticalGridLines,
//   HorizontalGridLines,
//   XAxis,
//   YAxis,
// } from "react-vis";

// const formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });

interface ChartData {
  x: number;
  y: number;
}

// interface AddressData {
//   time: string;
//   price: number;
// }

const Dashboard: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_chartData, setChartData] = useState<ChartData[]>([]);
  const [query, setQuery] = useState<string>("BTC");
  // const [addressData, setAddressData] = useState<AddressData | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_symbol, setSymbol] = useState<string>("");
  const searchInput = useRef<HTMLInputElement>(null);

  interface CryptoDataItem {
    time: number;
    transaction_count: number;
    average_transaction_value: number;
  }
  
  interface CryptoApiResponse {
    Data: {
      Data: CryptoDataItem[];
    };
  }

  useEffect(() => {
    loadChartData();
  }, [query]);
  const CRYPTO_COMPARE =
    "54c69a67adfc783963d3589c5a08a40a5d619b0f22b94b1c79df9acc9129c5ff";
    const loadChartData = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${query}&api_key=${CRYPTO_COMPARE}&limit=30`
      );
    
      const data: CryptoApiResponse = await response.json();
      const bulkData = data.Data.Data;
    
      const dataArray = bulkData.map((y: CryptoDataItem) => ({
        x: y.time * 1000, // Convert UNIX timestamp to milliseconds
        y: y.transaction_count * y.average_transaction_value,
      }));
    
      console.log("response", dataArray);
      setChartData(dataArray);
      setSymbol(query);
    };

  const handleInputChange = () => {
    if (searchInput.current) {
      setQuery(searchInput.current.value);
    }
  };

  return (
    <>
      <div className="inputDiv">
        <input
          placeholder="Search for a symbol"
          ref={searchInput}
          onChange={handleInputChange}
          className="dataRequest"
        />
        <button onClick={loadChartData} className="dataRequest">
          Load Onchain Data
        </button>
        <AdvancedChart widgetProps={{ theme: "light" }} />
      </div>
    </>
  );
};

export default Dashboard;
