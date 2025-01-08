import React, { useEffect, useRef } from 'react';
import { Grid, useTheme, Divider, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as echarts from 'echarts';

const WalletOverview: React.FC = () => {
  const theme = useTheme();
  const chartRef = useRef(null);

  type Year = '2024' | '2023' | '2022';

  const data: Record<Year, { categoryA: number[]; categoryB: number[] }> = {
    2024: {
      categoryA: [1000, 2000, 1500, 800, 700, 1100, 1300, 1400, 1200, 2000, 2200, 1800],
      categoryB: [1200, 1800, 1400, 900, 600, 1000, 1200, 1300, 1100, 1700, 2100, 1600],
    },
    2023: {
      categoryA: [900, 1900, 1400, 700, 600, 1000, 1200, 1300, 1100, 1900, 2100, 1700],
      categoryB: [1100, 1700, 1300, 800, 500, 900, 1100, 1200, 1000, 1600, 2000, 1500],
    },
    2022: {
      categoryA: [800, 1800, 1300, 600, 500, 900, 1100, 1200, 1000, 1800, 2000, 1600],
      categoryB: [1000, 1600, 1200, 700, 400, 800, 1000, 1100, 900, 1500, 1900, 1400],
    },
  };

  const [year, setYear] = React.useState('2024');

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current, theme);

    const option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Category A', 'Category B'],
        top: 'bottom',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Category A',
          type: 'bar',
          data: data[year as keyof typeof data].categoryA,
          itemStyle: {
            color: '#1B70F1',
          },
        },
        {
          name: 'Category B',
          type: 'bar',
          data: data[year as keyof typeof data].categoryB,
          itemStyle: {
            color: '#E2B58B',
          },
        },
      ],
    };

    chartInstance.setOption(option);

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, [theme, year]);

  return (
    <Grid item spacing={4} className=''>
      <Grid item className="shadow rounded" style={{ background: theme.palette.mode === "dark" ? "transparent" : "#ffffff", border: theme.palette.mode === "dark" ? "1px solid #ffffff35" : "1px solid #ffffff23" }}>
        <div className="flex px-6 py-4 justify-between items-center">
          <div className="flex items-center gap-6">
            <div className='4'>
              <div className='text-base font-normal pb-1' style={{ color: theme.palette.primary.light }}>Spending Activity</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Grid item className="flex items-center gap-4">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={year}
                  onChange={handleChange}
                >
                  
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </div>
        </div>
        <Divider />
        <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
      </Grid>
    </Grid>
  );
};

export default WalletOverview;
