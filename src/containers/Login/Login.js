import React from 'react';

const Login = (props) => {
  const {
    onLogin,
    username,
    password,
    otp,
    onUpdateUsernameField,
    onUpdatePasswordField,
    onUpdateOTPField,
  } = props || {};

  return (
    <div>
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

