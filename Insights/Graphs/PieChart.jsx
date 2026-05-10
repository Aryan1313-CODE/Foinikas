import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

import './chart.css'

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#AA336A', '#6A33AA', '#33AA6A', '#FF6384',
  '#36A2EB', '#FFCE56'
];

const SectorPieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSectorData = async () => {
      try {
        const response = await axios.get(
          `https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=${import.meta.env.VITE_FMP_API_KEY}`
        );

        const sectors = response.data.sectorPerformance;

        // Convert string percentages to absolute values
        const formatted = sectors.map((sector, index) => ({
          name: sector.sector,
          value: Math.abs(parseFloat(sector.changesPercentage)),
        }));

        setData(formatted);
      } catch (error) {
        console.error('Error fetching sector data:', error);
      }
    };

    fetchSectorData();
  }, []);

  return (
    <div className="w-full h-[80%] ">
      {/* <h2 className="text-xl font-semibold mb-4 text-center">Global Market Share by Sector</h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart className=''>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" align="right" verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SectorPieChart;
