import React from 'react';

interface ForecastCardProps {
  day: string;
  date: string;
  icon: string;
  minTemp: number;
  maxTemp: number;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ day, date, icon, minTemp, maxTemp }) => {
  return (
    <div data-testid="forecast-card" style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#e0e0e0', margin: '5px' }}>
      <h3>{day}</h3>
      <p>{date}</p>
      <img src={icon} alt="weather icon" style={{ width: '40px' }} />
      <p>{minTemp}° / {maxTemp}°</p>
    </div>
  );
};

export default ForecastCard;
