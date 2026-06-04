import React from 'react';
import { WeatherData } from '../types/weather';

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div data-testid="current-weather">
      <h2>{data.city}, {data.country}</h2>
      <p>{data.weatherCondition}</p>
      <p>{data.temperature}°C</p>
      <p>Feels Like: {data.feelsLike}°C</p>
      <p>Min: {data.minTemp}°C, Max: {data.maxTemp}°C</p>
    </div>
  );
};

export default CurrentWeather;
