import React from 'react';

interface WeatherMetricsProps {
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
}

const WeatherMetrics: React.FC<WeatherMetricsProps> = ({ humidity, windSpeed, pressure, visibility }) => {
  return (
    <div data-testid="weather-metrics" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <div>
        <h4>Humidity</h4>
        <p>{humidity}%</p>
      </div>
      <div>
        <h4>Wind Speed</h4>
        <p>{windSpeed} km/h</p>
      </div>
      <div>
        <h4>Pressure</h4>
        <p>{pressure} hPa</p>
      </div>
      <div>
        <h4>Visibility</h4>
        <p>{visibility} km</p>
      </div>
    </div>
  );
};

export default WeatherMetrics;
