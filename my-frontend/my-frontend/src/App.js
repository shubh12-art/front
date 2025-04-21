import React, { useState } from 'react';

function App() {
  const [link, setLink] = useState('');

  const generateLink = async () => {
    try {
      const response = await fetch('https://your-backend-url.com/api/generate-token');
      const data = await response.json();
      setLink(data.link);
    } catch (error) {
      console.error('Error generating link:', error);
      setLink('Error occurred');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🔐 One-Time Access Page</h1>
      <button onClick={generateLink}>Generate One-Time Link</button>
      {link && (
        <div style={{ marginTop: '20px' }}>
          <p>🔗 Generated Link:</p>
          <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
      )}
    </div>
  );
}

export default App;