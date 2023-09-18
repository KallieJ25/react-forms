import React, { useState } from 'react';

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState(null); // Username validation error
  const [passwordError, setPasswordError] = useState(null); // Password validation error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (username.length < 8) {
      setUsernameError('Username must be at least 8 characters.');
      return;
    } else {
      setUsernameError(null);
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      return;
    } else {
      setPasswordError(null);
    }

    try {
      // API request and token handling (similar to previous code)
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(null); // Clear username validation error when input changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(null); // Clear password validation error when input changes
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
        {usernameError && <p className="error">{usernameError}</p>} {/* Username validation error */}
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        {passwordError && <p className="error">{passwordError}</p>} {/* Password validation error */}
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>} {/* General error */}
    </div>
  );
}

export default SignUpForm;