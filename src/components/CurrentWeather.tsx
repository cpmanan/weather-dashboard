import React from 'react';

interface CurrentWeatherProps {
  city: string;
  country: string;
  temperature: number;
  weatherCondition: string;
  icon: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city, country, temperature, weatherCondition, icon }) => {
  return (
    <div style={{ padding: '20px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 data-testid="current-city">{city}, {country}</h2>
      <img src={icon} alt={weatherCondition} data-testid="weather-icon" />
      <p data-testid="weather-condition">{weatherCondition}</p>
      <p data-testid="current-temperature">{temperature}°C</p>
    </div>
  );
};

export default CurrentWeather;
