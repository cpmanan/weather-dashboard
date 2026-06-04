export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  minTemp: number;
  maxTemp: number;
  weatherCondition: string;
  lat: number;
  lon: number;
}

export interface ForecastData {
  day: string;
  weatherIcon: string;
  minTemp: number;
  maxTemp: number;
}

export interface ChartData {
  time: string;
  temperature: number;
}
