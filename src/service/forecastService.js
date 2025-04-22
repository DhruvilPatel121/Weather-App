const API_KEY = '1639c6a23356442f996121538252104';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getForecast = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=4`
    );
    const data = await response.json();

    return data.forecast.forecastday.map(day => ({
      day: new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' }),
      temp: day.day.avgtemp_c,
      condition: day.day.condition.text
    }));
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
}