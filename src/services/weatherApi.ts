import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_BASE_URL;

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/2.5/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('City not found. Please check spelling and try again.');
  }
};
