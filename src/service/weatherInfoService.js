const API_KEY = '1639c6a23356442f996121538252104';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
    );
    const data = await response.json();

    return {
      location: data.location.name,
      region: data.location.region,
      country: data.location.country,
      localtime: data.location.localtime,
      temperature: data.current.temp_c,
      feelslike: data.current.feelslike_c,
      humidity: data.current.humidity,
      wind_kph: data.current.wind_kph,
      wind_dir: data.current.wind_dir,
      pressure: data.current.pressure_mb,
      precipitation: data.current.precip_mm,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      uv: data.current.uv
    };
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
}