import React from 'react';

function WeatherDetailCard ({ icon, title, value })  {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      textAlign: 'center',
      minWidth: '130px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{icon}</div>
      <div style={{ fontWeight: 'bold', color: '#666' }}>{title}</div>
      <div style={{ fontSize: '1.2rem', marginTop: '5px' }}>{value}</div>
    </div>
  )
}

export default WeatherDetailCard