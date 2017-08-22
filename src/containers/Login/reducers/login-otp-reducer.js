import * as types from '../login-action-types';

const oneTimePassword = (state = '', action) => {
  switch (action.type) {
    case types.LOGIN_UPDATE_OTP:
      return action.otp;
    default:
      return state;
  }
};

export default oneTimePassword;

