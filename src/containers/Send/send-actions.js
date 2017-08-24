import {
  isValidStatusCode,
  toJSON,
  makePostOptions,
} from '../../utils/api-helpers';
import * as types from './send-action-types';

export const sendCoinsStart = () => {
  return {
    type: types.SEND_COINS,
  };
};
export const sendCoinsSuccess = () => {
  return {
    type: types.SEND_COINS_SUCCESS,
  };
};
export const sendCoinsFail = () => {
  return {
    type: types.SEND_COINS_FAILURE,
  };
};
export const updateAmountField = (amount) => {
  return {
    type: types.SEND_COINS_AMOUNT,
    amount,
  };
};
export const updatePasswordField = (password) => {
  return {
    type: types.SEND_COINS_PASSWORD,
    password,
  };
};
export const updateOTPField = (otp) => {
  return {
    type: types.SEND_COINS_OTP,
    otp,
  };
};
export const updateDestinationAddressField = (destinationAddress) => {
  return {
    type: types.SEND_COINS_DESTINATION_ADDRESS,
    destinationAddress,
  };
};

