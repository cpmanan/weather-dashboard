import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import ForecastCard from '../components/ForecastCard';
import WeatherChart from '../components/WeatherChart';
import WeatherMap from '../components/WeatherMap';
import { useWeather } from '../hooks/useWeather';

const Dashboard: React.FC = () => {
  const [city, setCity] = useState('');
  const { data, error, isLoading } = useWeather(city);

  const handleSearch = (query: string) => {
    setCity(query);
  };

  return (
    <div data-testid="dashboard">
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>City not found. Please check spelling and try again.</p>}
      {data && (
        <>
          <CurrentWeather data={data} />
          <WeatherMap lat={data.coord.lat} lon={data.coord.lon} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
