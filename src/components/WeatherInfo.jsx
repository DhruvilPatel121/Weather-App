import React from 'react';
import WeatherDetailCard from './WeatherDetailCard';
import CustomCard from './common/CustomCard';

function WeatherInfo  ({ weather })  {
  const weatherDetails = [
    { icon: '🌡️', title: 'Feels Like', value: `${weather.feelslike}°C` },
    { icon: '💧', title: 'Humidity', value: `${weather.humidity}%` },
    { icon: '💨', title: 'Wind', value: `${weather.wind_kph} km/h` },
    { icon: '🧭', title: 'Direction', value: weather.wind_dir },
    { icon: '🌡️', title: 'Pressure', value: `${weather.pressure} mb` },
    { icon: '🌧️', title: 'Rain', value: `${weather.precipitation} mm` }
  ];

  const astroDetails = [
    { icon: '🌅', title: 'Sunrise', value: weather.sunrise },
    { icon: '🌇', title: 'Sunset', value: weather.sunset },
    { icon: '🌕', title: 'Moonrise', value: weather.moonrise },
    { icon: '🌑', title: 'Moonset', value: weather.moonset }
  ];

  return (
    <div style={{ padding: '20px' }}>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        textAlign: 'left', 
        marginBottom: '30px' 
        }}>
        {/* <div>
          <h2 style={{ fontSize: '2.5rem', margin: '10px 0' }}>
          {weather.location}
        </h2>
        <div style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
          {weather.temperature}°C
        </div>
        <div style={{ fontSize: '1.4rem', color: '#666' }}>
          {weather.condition}
        </div>
        </div> */}

        <CustomCard variant="default">
          <h2 style={{ fontSize: '2.5rem', margin: '10px 0' }}>
          {weather.location}
        </h2>
        <div style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
          {weather.temperature}°C
        </div>
        <div style={{ fontSize: '1.4rem', color: '#666' }}>
          {weather.condition}
        </div>
        </CustomCard>


        {/* <div style={{
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
        </div> */}
        
        <CustomCard variant="default">
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
        </CustomCard>

      </div>
      
      <h3 style={{ 
        fontSize: '1.5rem', 
        margin: '20px 0', 
        color: '#333',
        paddingLeft: '10px'
      }}>
        Astronomical Information
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '15px'
      }}>
        {astroDetails.map((detail, index) => (
          <WeatherDetailCard
            key={index}
            icon={detail.icon}
            title={detail.title}
            value={detail.value}
          />
        ))}
      </div>
      
      <h3 style={{ 
        fontSize: '1.5rem', 
        margin: '20px 0', 
        color: '#333',
        paddingLeft: '10px'
      }}>
        Weather Details
      </h3>

          
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
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