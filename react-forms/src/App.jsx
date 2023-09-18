import React, { useState } from 'react';
import './App.css';
import Authenticate from './components/Authenticate';
import SignUpForm from "./components/SignUpForm";

function App() {
  // Create token and setToken state variables with initial value null
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

