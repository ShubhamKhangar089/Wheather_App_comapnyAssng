const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = 'd965fa4385581c2cd954936f62fab951';

export const fetchWeather = async (city, unit) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`);
  const data = await response.json();
  console.log('fetchWeather :',data)
  return data;
};

export const fetchForecast = async (city, unit) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`);
  const data = await response.json();
  console.log('fetchForecast :',data.list.slice(0, 5))
  return data.list.slice(0, 5); // Get 5-day forecast
};