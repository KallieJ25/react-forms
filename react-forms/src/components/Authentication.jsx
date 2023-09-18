import React, { useState } from 'react';

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null); // state variable to store username

  const handleAuthenticate = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Authentication failed.');
      }

      const result = await response.json();

      if (result.success) {
        // store the message and username
        setSuccessMessage(result.message);
        setUsername(result.data.username); // extract and store the username
      } else {
        setSuccessMessage(null);
        setUsername(null); // reset username if authentication failed
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
     
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {username && <p className="username">Username: {username}</p>}
      <button onClick={handleAuthenticate}>Authenticate Token</button>
    </div>
  );
}

export default Authenticate;

