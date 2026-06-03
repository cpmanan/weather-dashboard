export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  minTemp: number;
  maxTemp: number;
  condition: string;
  icon: string;
}

export interface ForecastData {
  day: string;
  date: string;
  minTemp: number;
  maxTemp: number;
  rainProbability: number;
  condition: string;
  icon: string;
}

export interface ChartData {
  time: string;
  temperature: number;
}
