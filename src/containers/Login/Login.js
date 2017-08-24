import React from 'react';
import ActionButton from '../../components/ActionButton';
import InputBox from '../../components/InputBox';
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
    return <p> You are already logged in! </p>;
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
      <InputBox
        email
        label="Username"
        value={username}
        onChange={onUpdateUsernameField} />
      <InputBox
        password
        label="Password"
        value={password}
        onChange={onUpdatePasswordField} />
      <InputBox
        label="Google Auth Password"
        value={otp}
        onChange={onUpdateOTPField} />
      <p> Login </p>
      <ActionButton
        text="Login"
        onClick={onLogin} />
    </div>
  );
};

export default Login;

