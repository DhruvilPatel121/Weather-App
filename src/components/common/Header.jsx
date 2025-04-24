import React from 'react'
import SearchBar from '../SearchBar';
function Header({onSearch, location, region}) {

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
    
  return (
    <div style={{
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   width: '100%',
    //   maxWidth: '1400px',
    //   margin: '0 auto',
    display: 'grid',
      // gridTemplateColumns: 'auto minmax(200px, 770px) 300px',
      gridTemplateColumns: 'repeat(3, 1fr)',
      alignItems: 'center',
      gap: '20px',
      width: '100%',
      // maxWidth: '1400px',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        minWidth: 'max-content'
      }}>
        <img 
          src="https://cdn-icons-png.flaticon.com/128/1163/1163763.png" 
          alt="Weather Icon" 
          style={{
            width: '40px',
            height: '40px'
          }}
        />
        <span style={{
          fontSize: '35px',
          fontWeight: 'bold',
          color: '#fff'
        }}>
          Weatherwise
        </span>
      </div>
      
      <div style={{ 
        // flex: 1, 
        // maxWidth: '600px', 
        width: '100%',
        // margin: '0 20px'
         }}>
        <SearchBar onSearch={onSearch} />
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        minWidth: 'max-content'
      }}>
        <span style={{ color: '#fff', fontSize: '25px', fontWeight: 'bold' }}>{formattedDate}</span>
        <span style={{ color: '#fff', fontSize: '25px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>{location} {region ? `, ${region}` : ''}</span>
      </div>
    </div>
  )
}

export default Header
