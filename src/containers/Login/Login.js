import React from 'react';
import '../../styles/Login.css';

const Login = (props) => {
  const {
    isLoggingIn,
    username,
    password,
    otp,
    onLogin,
    onUpdateUsernameField,
    onUpdatePasswordField,
    onUpdateOTPField,
  } = props || {};

  if (isLoggingIn) {
    return (
      <div className="login-container">
        <div className="login-spinner">
        </div>
      </div>
    )
  }

  return (
    <div className="login-container">
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

