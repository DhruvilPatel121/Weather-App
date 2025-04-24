import React, { useState, useEffect } from 'react';
import { getSearchSuggestions } from '../service/searchService';

function SearchBar ({ onSearch })  {

  const [city, setCity] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    const fetchSuggestions = async () => {
      if(city.trim().length >= 2) {
        const data = await getSearchSuggestions(city)
        setSuggestions(data)
        setShowSuggestions(true)
      }
      else {
        setSuggestions([])
        setShowSuggestions(false)
      }
    }

  fetchSuggestions();
  }, [city])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.trim()) {
      onSearch(city)
      setShowSuggestions(false)
      setCity('')
    }
  }

  const handleSuggestionClick = (suggestion) => {
    const searchQuery = `${suggestion.name}, ${suggestion.country}`;
    onSearch(searchQuery);
    setShowSuggestions(false)
    setCity('')
  }


  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto',
      position: 'relative'
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
      
      {showSuggestions && suggestions.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          borderRadius: '15px',
          marginTop: '5px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 1000,
          maxHeight: '300px',
          overflow: 'auto'
        }}
        onMouseDown={(e) => e.preventDefault()}
        >
          
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '12px 15px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
                transition: 'background-color 0.2s',
                ':hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{suggestion.name}</div>
              <div style={{ fontSize: '0.9em', color: '#666' }}>
                {suggestion.region}, {suggestion.country}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar