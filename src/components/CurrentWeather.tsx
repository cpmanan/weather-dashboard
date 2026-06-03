import React from 'react';
import { WeatherData } from '../types/weather';

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold">{data.city}, {data.country}</h2>
      <p>{new Date().toLocaleString()}</p>
      <div className="flex items-center">
        <img src={data.icon} alt={data.condition} className="w-12 h-12" />
        <div className="ml-4">
          <p className="text-lg">{data.condition}</p>
          <p className="text-2xl font-bold">{data.temperature}°C</p>
          <p>Feels Like: {data.feelsLike}°C</p>
          <p>Min: {data.minTemp}°C / Max: {data.maxTemp}°C</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
