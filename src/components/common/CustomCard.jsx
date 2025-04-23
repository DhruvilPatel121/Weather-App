import React from 'react';

function CustomCard({ children, style, variant = 'default' }) {
  const variants = {
    default: {
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    weather: {
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '15px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '800px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      maxHeight: '80vh',
      overflow: 'auto'
    },
    forecast: {
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      textAlign: 'center',
      minWidth: '100px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    },
    detail: {
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      textAlign: 'center',
      minWidth: '130px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  return (
    <div style={{ 
      ...variants[variant],
      ...style 
    }}>
      {children}
    </div>
  )
}

export default CustomCard