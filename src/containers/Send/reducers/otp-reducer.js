import * as types from '../send-action-types';

// This piece of state corresponds to the Google Auth field on the send coins form.
// This is passcode is required to unlock the BitGo account and allow spending
const otp = (state = '0000000', action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_OTP:
      return action.otp;
    default:
      return state;
  }
};

export default otp;

