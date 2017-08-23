import { combineReducers } from 'redux';
import isLoggedIn from './reducers/is-logged-in-reducer';
import isLoggingIn from './reducers/logging-in-reducer';
import username from './reducers/login-username-reducer';
import password from './reducers/login-password-reducer';
import otp from './reducers/login-otp-reducer';

export default combineReducers({
  isLoggedIn,
  isLoggingIn,
  username,
  password,
  otp,
});

