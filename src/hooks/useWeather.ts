import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WeatherData } from '../types/weather';

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const { data } = await axios.get(`/api/weather?city=${city}`);
  return data;
};

export const useWeather = (city: string) => {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });
};
