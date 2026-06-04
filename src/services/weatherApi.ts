import axios from 'axios';

const weatherApi = axios.create({
  baseURL: process.env.VITE_WEATHER_BASE_URL,
  params: {
    appid: process.env.VITE_WEATHER_API_KEY,
    units: 'metric'
  }
});

export default weatherApi;
