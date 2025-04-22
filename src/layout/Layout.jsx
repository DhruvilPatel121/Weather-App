import React from 'react';

function Layout ({ children })  {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #87CEEB, #E0F6FF)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {children}
    </div>
  )
}

export default Layout