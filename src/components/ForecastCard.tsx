import React from 'react';
import { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div data-testid="forecast-card">
      <h3>{forecast.day}</h3>
      <p>{forecast.weatherIcon} {forecast.minTemp}° / {forecast.maxTemp}°</p>
    </div>
  );
};

export default ForecastCard;
