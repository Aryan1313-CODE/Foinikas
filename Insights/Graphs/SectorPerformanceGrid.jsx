import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './chart.css';

const getPerformanceColor = (change) => {
  if (change >= 2) return 'bg-green-600 text-white';
  if (change >= 1) return 'bg-green-500 text-white';
  if (change > 0) return 'bg-green-300 text-black';
  if (change === 0) return 'bg-gray-300 text-black';
  if (change <= -2) return 'bg-red-600 text-white';
  if (change <= -1) return 'bg-red-400 text-black';
  return 'bg-red-200 text-black';
};

const SectorPerformanceGrid = () => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    const fetchSectorData = async () => {
      try {
        const response = await axios.get(
          `https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=${import.meta.env.VITE_FMP_API_KEY}`
        );

        const sectorData = response.data.sectorPerformance.map(sector => ({
          name: sector.sector,
          change: parseFloat(sector.changesPercentage),
          weight: Math.floor(Math.random() * 20) + 2 // Replace with actual weight if available
        }));

        setSectors(sectorData);
      } catch (error) {
        console.error('Error fetching sector data:', error);
      }
    };

    fetchSectorData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="secondaryTitle text-white mb-3">Sector Performance</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {sectors.slice(0,-1).map((sector, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 shadow-md ${getPerformanceColor(sector.change)}`}
          >
            <h3 className="text-lg font-semibold">{sector.name}</h3>
            <p className="text-xl font-bold">{sector.change >= 0 ? '+' : ''}{sector.change.toFixed(2)}%</p>
            <p className="text-sm">Weight: {sector.weight}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorPerformanceGrid;
