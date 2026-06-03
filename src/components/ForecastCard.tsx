import React from 'react';
import { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <p>{forecast.day}, {forecast.date}</p>
      <img src={forecast.icon} alt={forecast.condition} className="w-8 h-8" />
      <p>{forecast.minTemp}°C / {forecast.maxTemp}°C</p>
      <p>Rain: {forecast.rainProbability}%</p>
    </div>
  );
};

export default ForecastCard;
