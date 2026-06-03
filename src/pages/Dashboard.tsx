import React from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import ForecastCard from '../components/ForecastCard';
import WeatherChart from '../components/WeatherChart';
import WeatherMap from '../components/WeatherMap';
import useWeather from '../hooks/useWeather';

const Dashboard: React.FC = () => {
  const { weatherData, loading, error, getWeather } = useWeather();

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={getWeather} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <>
          <CurrentWeather data={weatherData} />
          <WeatherMap lat={weatherData.lat} lon={weatherData.lon} city={weatherData.city} />
          {/* Add ForecastCard and WeatherChart components here */}
        </>
      )}
    </div>
  );
};

export default Dashboard;
