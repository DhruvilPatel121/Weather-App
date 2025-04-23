import React from 'react'

function ForecastToggle ({activeView, onViewChange}) {
    
    const buttons = [
        {id: 'hourly', label: 'Today'},
        {id: 'daily', label: 'Week'},
        {id: 'monthly', label: 'Month'},
    ]

    const getHeaderText = () => {
        switch(activeView) {
            case 'hourly':
                return 'Today\'s';
            case 'daily':
                return 'Weekly';
            case 'monthly':
                return 'Monthly';
            default:
                return 'Weekly';
        }
    };

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '0px 20px',
    }}>
      <h2 style={{
          fontSize: '1.5rem',
          color: '#333'
       }}>
         {/* {buttons.find(btn => btn.id === activeView).label} Forecast */}
        {getHeaderText()}  Forecast
      </h2>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
    }}>
      {buttons.map(button => (
        <button 
        key={button.id}
        onClick={() => onViewChange(button.id)}
        style={{
            padding: '8px 16px',
            borderRadius: '20px',
            background: activeView === button.id ? '#4a90e2' : '#fff',
            color: activeView === button.id? '#fff' : '#333',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
        >
            {button.label}
        </button>
      ))}
    </div>
    </div>
  )
}

export default ForecastToggle
