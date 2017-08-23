import * as types from '../login-action-types';

// BitGo accepts 0000000 as a one-time-password on testnet
const oneTimePassword = (state = '0000000', action = {}) => {
  switch (action.type) {
    case types.LOGIN_UPDATE_OTP:
      return action.otp;
    default:
      return state;
  }
};

export default oneTimePassword;

