import React, { useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate'; 

function App() {
  
  const [token, setToken] = useState(null);

  return (
    <>
      <div>
        {/* Pass setToken to SignUpForm */}
        <SignUpForm setToken={setToken} />
        {/* Pass token to Authenticate */}
        <Authenticate token={token} />
      </div>
    </>
  );
}

export default App;
