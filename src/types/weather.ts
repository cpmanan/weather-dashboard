export interface WeatherData {
  city: string;
  country: string;
  weatherCondition: string;
  temperature: number;
  feelsLike: number;
  minTemperature: number;
  maxTemperature: number;
  coord: {
    lat: number;
    lon: number;
  };
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
