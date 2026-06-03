import React from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import { useWeather } from '../hooks/useWeather';

const Dashboard: React.FC = () => {
  const { weatherData, loading, error, getWeather } = useWeather();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={getWeather} />
      {loading && <p data-testid="loading-state">Loading...</p>}
      {error && <p data-testid="error-state" className="text-red-500">{error}</p>}
      {weatherData && (
        <CurrentWeather
          city={weatherData.name}
          country={weatherData.sys.country}
          temperature={weatherData.main.temp}
          weatherCondition={weatherData.weather[0].description}
          icon={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        />
      )}
    </div>
  );
};

export default Dashboard;
