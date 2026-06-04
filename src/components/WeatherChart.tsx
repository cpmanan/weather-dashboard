import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData } from '../types/weather';

interface WeatherChartProps {
  data: ChartData[];
}

const WeatherChart: React.FC<WeatherChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300} data-testid="weather-chart">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
