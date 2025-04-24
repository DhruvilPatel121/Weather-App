import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { getCurrentWeather } from '../service/weatherInfoService';
import { getForecast } from '../service/forecastService';
import Header from '../components/common/Header';

function Dashboard  ()  {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      if(!currentWeather){
        setLoading(true);
      }
      setError(null);
      
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(city),
        getForecast(city)
      ]);

      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData('India');
  }, []);

  if (loading) {
    return <div><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {/* <Header
        location={currentWeather?.location || 'Loading...'} 
      /> */}
    <div style={{
      width: '100%',
      // maxWidth: '1200px'
    }}>
      <Header
        onSearch={fetchWeatherData}
        location={currentWeather?.location || 'Loading...'} 
        region={currentWeather?.region || 'Loading...'}
      />
      {/* <SearchBar onSearch={fetchWeatherData} /> */}
      {loading && !currentWeather ? (
        <div><h1>Loading...</h1></div>
      ) : error ? (
        <div>{error}</div> 
      ) : ( currentWeather &&
        <WeatherCard 
          currentWeather={currentWeather} 
          forecast={forecast} 
        />
      )}
    </div>
    </>
  )
}

export default Dashboard