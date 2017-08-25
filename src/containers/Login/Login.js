import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import InputBox from '../../components/InputBox';
import '../../styles/LoadingSpinner.css';

// The Login form
// Each value of each field in this form is controlled via store
// to update the value of a given field, we must call the corresponding
// update action (e.g. onUpdatePasswordField)
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

Login.defaultProps = {
  onLogin: () => {},
  onUpdateUsernameField: () => {},
  onUpdatePasswordField: () => {},
  onUpdateOTPField: () => {},
};

Login.propTypes = {
  isLoggingIn: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
  password: PropTypes.string,
  otp: PropTypes.string,
  onLogin: PropTypes.func,
  onUpdateUsernameField: PropTypes.func,
  onUpdatePasswordField: PropTypes.func,
  onUpdateOTPField: PropTypes.func,
};

export default Login;

