import axios from 'axios';

const apiKey = process.env.VITE_WEATHER_API_KEY;
const baseUrl = process.env.VITE_WEATHER_BASE_URL;

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${baseUrl}/data/2.5/weather`, {
      params: {
        q: city,
        appid: apiKey
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};