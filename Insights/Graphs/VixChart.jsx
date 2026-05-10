import React, { useEffect, useState } from 'react';
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const VixChart = ({ small, indice }) => {
  const [chartData, setChartData] = useState([]);
  const [isPositive, setIsPositive] = useState(false);
  const API_KEY = '775ac39f47cb4c0885e60d7ca66df990'; // Twelve Data API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        let formatted = [];

        if (indice === 'VIX') {
          // Fetch VIX data from Yahoo Finance (unofficial API)
          const res = await fetch(
            `https://query1.finance.yahoo.com/v8/finance/chart/^VIX?range=1mo&interval=1d`
          );
          const data = await res.json();

          if (data?.chart?.result?.length) {
            const result = data.chart.result[0];
            const timestamps = result.timestamp;
            const closes = result.indicators.quote[0].close;

            formatted = timestamps.map((ts, idx) => ({
              date: new Date(ts * 1000).toISOString().split('T')[0], // format YYYY-MM-DD
              close: closes[idx] ? parseFloat(closes[idx]) : null
            })).filter(item => item.close !== null);
          }
        } else {
          // Fetch data from Twelve Data API for other indices
          const res = await fetch(
            `https://api.twelvedata.com/time_series?symbol=${indice}&interval=1day&outputsize=30&apikey=${API_KEY}`
          );
          const data = await res.json();

          if (data?.values) {
            formatted = data.values
              .map(item => ({
                date: item.datetime,
                close: parseFloat(item.close)
              }))
              .reverse(); // oldest to newest
          }
        }

        setChartData(formatted);
      } catch (err) {
        console.error('Error fetching chart data:', err);
      }
    };

    if (indice) {
      fetchData();
    }
  }, [indice]);

  useEffect(() => {
    if (chartData.length > 1) {
      const latest = chartData[chartData.length - 1];
      const previous = chartData[chartData.length - 2];
      setIsPositive(latest.close - previous.close >= 0);
    }
  }, [chartData]);

  // Helper for showing the price box on the chart
  const renderPriceBox = () => {
    if (chartData.length < 2) return null;
    const latest = chartData[chartData.length - 1];
    const previous = chartData[chartData.length - 2];
    const diff = latest.close - previous.close;
    const isPositive = diff >= 0;

    const leftPos = 
      indice === "QQQ" ? "425px" :
      indice === "XLK" ? "750px" :
      indice === "EEM" ? "1080px" :
      indice === "DIA" ? "20px" :
      '100px';

    return (
      <div
        className={`left-[${leftPos}]`}
        style={{
          position: 'absolute',
          top: !small ? '20px' : '',
          color: !small ? (isPositive ? '#4caf50' : 'rgb(248 113 113)') : 'white',
          fontWeight: 'bold',
          fontSize: '1rem',
          background: !small ? 'rgba(0,0,0,0.5)' : '#9932CC',
          padding: '10px 16px',
          borderRadius: '6px',
          zIndex: 2,
          boxShadow: small ? '2px 2px 5px #000' : ''
        }}
      >
        {indice}: ${latest.close.toFixed(2)} <br />
        ({isPositive ? '+' : ''}${diff.toFixed(2)})
      </div>
    );
  };

  return (
    <div style={{ width: '100%', maxWidth: '950px' }}>
      {renderPriceBox()}
      
      <ResponsiveContainer width="100%" height={small ? 300 : 400}>
        <ReLineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#dee2e6" />
          {!small && (
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: 'white', dx:20, dy:20 }}
              textAnchor="end"
            />
          )}
          <YAxis
            tick={{ fill: small ? 'rgba(255,255,255,0)' : 'white' }}
            domain={['auto', 'auto']}
          />
          <Tooltip formatter={value => `$${value.toFixed(2)}`} />
          {!small && <Legend />}
          <Line
            type="monotone"
            dataKey="close"
            stroke={
              indice === 'VIX'
                ? '#9932CC' // Purple for VIX
                : (small ? (isPositive ? '#4caf50' : 'red') : '#0088fe')
            }
            strokeWidth={2.5}
            dot={false}
            name={indice}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VixChart;
