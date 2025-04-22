import React, { useState } from 'react';

function SearchBar ({ onSearch })  {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.trim()) {
    onSearch(city);
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto'
    }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a City..."
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '25px',
            border: 'none',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontSize: '16px',
            outline: 'none'
          }}
        />
      </form>
    </div>
  )
}

export default SearchBar