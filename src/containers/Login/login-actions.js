import * as types from './login-action-types';

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

// TODO: Add throttling
export const updateUsernameField = (username) => {
  return {
    type: types.LOGIN_UPDATE_USERNAME,
    username,
  };
};
export const updatePasswordField = (password) => {
  return {
    type: types.LOGIN_UPDATE_PASSWORD,
    password,
  };
};
export const updateOTPField = (otp) => {
  return {
    type: types.LOGIN_UPDATE_OTP,
    otp,
  };
};

// API call to fetch current provided wallet
export const login = () => (dispatch, getState) => {
  const state = getState();
  const {
    username,
    password,
    otp = '0000000',  //By default, Bitgo accepts 0000000 for OTP on testnet
  } = state.login;
  if (!username || !password || !otp) {
    console.log('Please provide the required fields');
  }
  const login = { username, password, otp };
  const options = {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(login),
  };

  dispatch(loggingIn());
  fetch('api/v1/bitgo/login', options)
    .then((res) => res.json())
    .then((json) => {
      dispatch(notLoggingIn());
      console.log(json)
    });
};

