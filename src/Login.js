import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (email, password) => {
    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((data) => {
        const users = data || [];
        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          localStorage.setItem('token', 'your_token_here');
          setIsLoggedIn(true);
          setError('');
          navigate('/');
        } else {
          setError('Invalid email or password');
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again.');
      });
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login</h2>
        <LoginForm onLogin={handleLogin} />

        {!isLoggedIn && (
          <>
            <p className="register-link">
              Don't have an account? <Link to="/">Register here</Link>.
            </p>
            {error && <p className="error-message">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
