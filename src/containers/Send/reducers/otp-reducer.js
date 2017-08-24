import * as types from '../send-action-types';

const otp = (state = '0000000', action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_OTP:
      return action.otp;
    default:
      return state;
  }
};

export default otp;

