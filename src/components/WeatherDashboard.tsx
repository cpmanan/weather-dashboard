"use client";

import React, { useEffect, useState } from 'react';
import styles from './WeatherDashboard.module.css';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  forecast: string;
}

const WeatherDashboard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/feature')
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch weather data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div data-testid="loading">Loading...</div>;
  if (error) return <div data-testid="error">{error}</div>;

  return (
    <div className={styles.dashboard} data-testid="weather-dashboard">
      <h1>Weather Dashboard</h1>
      {weatherData && (
        <div>
          <p data-testid="temperature">Temperature: {weatherData.temperature}°C</p>
          <p data-testid="humidity">Humidity: {weatherData.humidity}%</p>
          <p data-testid="wind-speed">Wind Speed: {weatherData.windSpeed} km/h</p>
          <p data-testid="forecast">Forecast: {weatherData.forecast}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
