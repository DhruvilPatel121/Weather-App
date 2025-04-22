import React from 'react';
import WeatherDetailCard from './WeatherDetailCard';

function WeatherInfo  ({ weather })  {
  const weatherDetails = [
    { icon: '🌡️', title: 'Feels Like', value: `${weather.feelslike}°C` },
    { icon: '💧', title: 'Humidity', value: `${weather.humidity}%` },
    { icon: '💨', title: 'Wind', value: `${weather.wind_kph} km/h` },
    { icon: '🧭', title: 'Direction', value: weather.wind_dir },
    { icon: '🌡️', title: 'Pressure', value: `${weather.pressure} mb` },
    { icon: '🌧️', title: 'Rain', value: `${weather.precipitation} mm` }
  ];

  return (
    <div style={{ padding: '20px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', margin: '10px 0' }}>
          {weather.location}
        </h2>
        <div style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
          {weather.temperature}°C
        </div>
        <div style={{ fontSize: '1.4rem', color: '#666' }}>
          {weather.condition}
        </div>
        </div>

        <div style={{
          textAlign: 'right',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '2.5rem', margin: '10px 0' }}>
            Feels like: {weather.feelslike}°C
          </h2>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '10px 0' }}>
            Region: {weather.region}
          </p>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '10px 0' }}>
            Country: {weather.country}
          </p>
          <p style={{ fontSize: '1.4rem', color: '#666' }}>
            Local Time: {new Date(weather.localtime).toLocaleTimeString()}
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px'
      }}>
        {weatherDetails.map((detail, index) => (
          <WeatherDetailCard
            key={index}
            icon={detail.icon}
            title={detail.title}
            value={detail.value}
          />
        ))}
      </div>
    </div>
  )
}

export default WeatherInfo