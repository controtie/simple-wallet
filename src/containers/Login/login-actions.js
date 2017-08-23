import * as types from './login-action-types';
import {
  isValidStatusCode,
  toJSON,
  makePostOptions,
  isValidLogin,
} from '../../utils/api-helpers';
import loginSelector from '../../selectors/login-selector';

// REDUCER: logging-in-reducer.js
// return true if calling login api
// while true, displays loading spinner
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

// REDUCER: is-logged-in-reducer.js
// returns true if a user is logged in
// while true will display wallet page
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

// TODO: Add throttling
// REDUCER: login-username-reducer.js
// updates state field with passed in data
export const updateUsernameField = (username) => {
  return {
    type: types.LOGIN_UPDATE_USERNAME,
    username,
  };
};
// REDUCER: login-password-reducer.js
export const updatePasswordField = (password) => {
  return {
    type: types.LOGIN_UPDATE_PASSWORD,
    password,
  };
};
// REDUCER: login-otp-reducer.js
export const updateOTPField = (otp) => {
  return {
    type: types.LOGIN_UPDATE_OTP,
    otp,
  };
};

// API call to local node back-end
// authenticates user into a bitgo wallet
export const login = () => (dispatch, getState) => {
  const state = getState();
  const loginFields = loginSelector(state);

  if (!isValidLogin(loginFields)) {
    return
  }

  const payload = {
    body: JSON.stringify(loginFields)
  };

  const options = makePostOptions(payload);

  //display loading spinner and initiate request
  dispatch(loggingIn());
  fetch('api/v1/bitgo/login', options)
    .then(isValidStatusCode)
    .then(toJSON)
    .then((json) => {
      dispatch(isLoggedIn());
      dispatch(notLoggingIn());
      console.log(json)
    })
    .catch(() => {
      dispatch(isNotLoggedIn());
      dispatch(notLoggingIn());
    });
};

