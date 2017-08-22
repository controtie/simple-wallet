import { combineReducers } from 'redux';
import isLoggingIn from './reducers/logging-in-reducer';
import username from './reducers/login-username-reducer';
import password from './reducers/login-password-reducer';
import otp from './reducers/login-otp-reducer';

export default combineReducers({
  isLoggingIn,
  username,
  password,
  otp,
});

