import React from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import ThemeToggle from '../components/ThemeToggle';

const Page: React.FC = () => {
  const handleSearch = (query: string) => {
    // Call API and update state with weather data
  };

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Weather Dashboard</h1>
        <ThemeToggle />
      </header>
      <SearchBar onSearch={handleSearch} />
      {/* Render CurrentWeather component with fetched data */}
      <CurrentWeather city="London" country="UK" temperature={15} weatherCondition="Clear Sky" icon="/icons/sunny.png" />
    </div>
  );
};

export default Page;
