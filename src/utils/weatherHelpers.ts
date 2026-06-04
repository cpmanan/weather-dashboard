export const formatTemperature = (temp: number): string => `${temp.toFixed(1)}°C`;

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
