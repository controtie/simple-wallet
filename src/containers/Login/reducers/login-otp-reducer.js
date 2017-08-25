import * as types from '../login-action-types';

// This piece of state corresponds to the Google Auth field on the login page form.
// This will be provided via SMS or Google's Auth application
// Used to login user and access their wallets
// BitGo always accepts 0000000 as an Auth password for testnet accounts and txns
const oneTimePassword = (state = '0000000', action = {}) => {
  switch (action.type) {
    case types.LOGIN_UPDATE_OTP:
      return action.otp;
    default:
      return state;
  }
};

export default oneTimePassword;

