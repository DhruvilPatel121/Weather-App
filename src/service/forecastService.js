const API_KEY = '1639c6a23356442f996121538252104';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getForecast = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=6`
    );
    const data = await response.json();

    const hourlyForecast = data.forecast.forecastday[0].hour.map(hour => ({
      time: new Date(hour.time).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      temp: hour.temp_c,
      condition: hour.condition.text,
      day: 'Today'
    }));

    const dailyForecast = data.forecast.forecastday.map(day => ({
      day: new Date(day.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      temp: day.day.avgtemp_c,
      condition: day.day.condition.text 
    }));

    const monthlyForecast = data.forecast.forecastday.map(day => ({
      month: new Date(day.date).toLocaleString('en-US', { month: 'long', day: 'numeric' }),
      temp: day.day.avgtemp_c,
      condition: day.day.condition.text
    }));

    return {
      hourly: hourlyForecast,
      daily: dailyForecast,
      monthly: monthlyForecast
    };
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
}