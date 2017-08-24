import React from 'react';
import '../../styles/Login.css';
import '../../styles/LoadingSpinner.css';

const Login = (props) => {
  const {
    isLoggingIn,
    isLoggedIn,
    username,
    password,
    otp,
    onLogin,
    onUpdateUsernameField,
    onUpdatePasswordField,
    onUpdateOTPField,
  } = props || {};

  if (isLoggedIn) {
    return null;
  }

  if (isLoggingIn) {
    return (
      <div className="login-container">
        <p> Login </p>
        <div className="loading-spinner">
        </div>
      </div>
    )
  }

  return (
    <div className="login-container">
      <p> Login </p>
      <p> username </p>
      <input
        value={username}
        onChange={onUpdateUsernameField} />
      <p> password </p>
      <input
        type="password"
        value={password}
        onChange={onUpdatePasswordField} />
      <p> otp </p>
      <input
        value={otp}
        onChange={onUpdateOTPField} />
      <p> Login </p>
      <button onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

