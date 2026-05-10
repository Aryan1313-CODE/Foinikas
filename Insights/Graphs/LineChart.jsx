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

const LineChart = ({ small, indice }) => {
  const [chartData, setChartData] = useState([]);
  const [isPositive, setIsPositive] = useState(false)
  const API_KEY = '775ac39f47cb4c0885e60d7ca66df990'; // Twelve Data API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.twelvedata.com/time_series?symbol=${indice}&interval=1day&outputsize=30&apikey=${API_KEY}`
        );
        const data = await res.json();

        if (data?.values) {
          const formatted = data.values
            .map(item => ({
              date: item.datetime,
              close: parseFloat(item.close)
            }))
            .reverse(); // oldest to newest

          setChartData(formatted);
        }
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

  return (
    <div style={{ width: '100%', maxWidth: '950px' }}>
      {/* <h2
        className="tertiaryTitle text-white mt-[40px]"
        style={{ textAlign: 'center', fontWeight: 600 }}
      >
        📈 S&P 500 – Last 30 Days
      </h2> */}

      {chartData.length > 1 && (() => {
        const latest = chartData[chartData.length - 1];
        const previous = chartData[chartData.length - 2];
        const latestValue = latest[indice];
        const previousValue = previous[indice];
        const diff = latestValue - previousValue;
        const isPositive = diff >= 0;

        return (
          <div
          className={`left-[${indice === "QQQ"?"425px":indice === "XLK"?"750px":indice === "EEM"?"1080px": indice === "DIA"?"20px":'100px'}]
          ${!small ? "bg-[rgba(0,0,0,0.5)] ": "bg-[#9932CC] "}
          `}
            style={{
              position: 'absolute',
              top: !small ? '20px' : '',
              
              color: !small ? (isPositive ? '#4caf50' : 'rgb(248 113 113)') : 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
              padding: '10px 16px',
              borderRadius: '6px',
              zIndex: 2,
              boxShadow: small ? '2px 2px 5px #000' : ''
            }}
          >
            {indice}: ${latest.close.toFixed(2)} <br />
            ({isPositive ? '+' : ''}${diff.toFixed(2) === NaN ? diff.toFixed(2) : "-"}) Today
          </div>
        );
      })()}


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
            stroke={small ? (isPositive ? '#4caf50' : 'red') : '#0088fe'}
            strokeWidth={2.5}
            dot={false}
            name={indice}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;