import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      onLogin(email, password);
    }
  };

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      setInputError('Please enter your email');
    }
    if (password === '' || password === null) {
      result = false;
      setInputError('Please enter your password');
    }
    return result;
  };

  return (
    <form onSubmit={proceedLogin}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
      {inputError && <p className="error-message">{inputError}</p>}
    </form>
  );
}

export default LoginForm;
