import React from 'react';

function ForecastCard  ({ day, temp, condition })  {
  const weatherIcons = {
    sunny: '☀️',
    clear: '☀️',
    cloudy: '☁️',
    cloud: '☁️',
    rain: '🌧️',
    rainy: '🌧️',
    storm: '⛈️',
    snow: '❄️',
    mist: '🌫️',
    fog: '🌫️',
    default: '☀️'
  };

  const getWeatherIcon = (condition) => {
    const lowercaseCondition = condition.toLowerCase();
    const matchedIcon = Object.keys(weatherIcons).find(key => 
      lowercaseCondition.includes(key)
    );
    return weatherIcons[matchedIcon] || weatherIcons.default;
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      textAlign: 'center',
      minWidth: '100px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontWeight: 'bold' }}>{day}</div>
      <div style={{ fontSize: '2rem' }}>{getWeatherIcon(condition)}</div>
      <div>{temp}°C</div>
    </div>
  )
}

export default ForecastCard