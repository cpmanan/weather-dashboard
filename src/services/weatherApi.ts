import axios from 'axios';

const API_KEY = process.env.VITE_WEATHER_API_KEY;
const BASE_URL = process.env.VITE_WEATHER_BASE_URL;

export const getWeatherData = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/data/2.5/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};
