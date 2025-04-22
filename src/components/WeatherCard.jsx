import React from 'react';
import WeatherInfo from './WeatherInfo';
import ForecastCard from './ForecastCard';

function WeatherCard ({ currentWeather, forecast })  {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '20px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '800px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      maxHeight: '80vh',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <WeatherInfo weather={currentWeather} />
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: '20px'
      }}>
        {forecast.map((day, index) => (
          <ForecastCard
            key={index}
            day={day.day}
            temp={day.temp}
            condition={day.condition}
          />
        ))}
      </div>
    </div>
  )
}

export default WeatherCard