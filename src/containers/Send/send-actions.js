import {
  isValidStatusCode,
  toJSON,
  makePostOptions,
  isValidSendTransaction,
} from '../../utils/api-helpers';
import * as types from './send-action-types';
import sendFieldsSelector from '../../selectors/send-selector';

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

export const sendCoins = () => (dispatch, getState) => {
  const state = getState();
  const sendFields = sendFieldsSelector(state);

  if (!isValidSendTransaction(sendFields)) {
    return;
  }

  const payload = {
    body: JSON.stringify(sendFields)
  };

  const options = makePostOptions(payload);

  fetch('api/v1/bitgo/sendCoins', options)
    .then(isValidStatusCode)
    .then(toJSON)
    .then((json) => {
      console.log('Send Coins Success!', json);
    })
    .catch((err) => {
      console.log('Send Coins Failed!', err)
    });
};

