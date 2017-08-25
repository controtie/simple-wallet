import { push } from 'react-router-redux';
import * as types from './login-action-types';
import {
  isValidStatusCode,
  toJSON,
  makePostOptions,
  isValidLogin,
} from '../../utils/api-helpers';
import loginSelector from '../../selectors/login-selector';

// logging-in-reducer.js
// displays loading spinner
export const loggingIn = () => {
  return {
    type: types.LOGGING_IN_TRUE,
  };
};
export const notLoggingIn = () => {
  return {
    type: types.LOGGING_IN_FALSE,
  };
};

// is-logged-in-reducer.js
// displays various <RedirectToLogin /> components
export const isLoggedIn = () => {
  return {
    type: types.IS_LOGGED_IN,
  };
};
export const isNotLoggedIn = () => {
  return {
    type: types.NOT_LOGGED_IN,
  };
};

// login-username-reducer.js
// updates username state with passed in data from login form
export const updateUsernameField = (username) => {
  return {
    type: types.LOGIN_UPDATE_USERNAME,
    username,
  };
};
// login-password-reducer.js
// updates password state with passed in data from login form
export const updatePasswordField = (password) => {
  return {
    type: types.LOGIN_UPDATE_PASSWORD,
    password,
  };
};
// login-otp-reducer.js
// updates otp state with passed in data from login form
export const updateOTPField = (otp) => {
  return {
    type: types.LOGIN_UPDATE_OTP,
    otp,
  };
};

// authenticates user into a bitgo wallet
export const login = () => (dispatch, getState) => {

  // fetch full state, then select related fields (username, password, otp)
  // using loginSelector
  const state = getState();
  const loginFields = loginSelector(state);

  if (!isValidLogin(loginFields)) {
    return;
  }

  // make payload and merge into POST request options
  const payload = {
    body: JSON.stringify(loginFields)
  };

  const options = makePostOptions(payload);

  // display loading spinner and initiate request
  dispatch(loggingIn());
  fetch('api/v1/bitgo/login', options)
    .then(isValidStatusCode)
    .then(toJSON)
    .then((json) => {
      console.log('Login Success!');
      // hide loading spinner, set user logged in to true, navigate to /wallets route
      dispatch(isLoggedIn());
      dispatch(notLoggingIn());
      dispatch(push('/wallets'));
    })
    .catch((err) => {
      console.log('Login Failed!', err)
      // hide loading spinner, login failed
      dispatch(isNotLoggedIn());
      dispatch(notLoggingIn());
    });
};

