import { useState } from 'react';
import { fetchWeather } from '../services/weatherApi';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async (city: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, getWeather };
};
