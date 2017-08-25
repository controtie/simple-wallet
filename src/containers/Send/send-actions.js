import { push } from 'react-router-redux';
import {
  isValidStatusCode,
  toJSON,
  makePostOptions,
  isValidSendTransaction,
} from '../../utils/api-helpers';
import * as types from './send-action-types';
import sendCoinsSelector from '../../selectors/send-coins-selector';

// send-coins-reducer.js
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

// amount-reducer.js
export const updateAmountField = (amount) => {
  return {
    type: types.SEND_COINS_AMOUNT,
    amount,
  };
};

// password-reducer.js
export const updatePasswordField = (password) => {
  return {
    type: types.SEND_COINS_PASSWORD,
    password,
  };
};

// otp-reducer.js
export const updateOTPField = (otp) => {
  return {
    type: types.SEND_COINS_OTP,
    otp,
  };
};

// destination-address-reducer.js
export const updateDestinationAddressField = (destinationAddress) => {
  return {
    type: types.SEND_COINS_DESTINATION_ADDRESS,
    destinationAddress,
  };
};

// Attempts to send coins from the currently selected wallet to destinationAddress
export const sendCoins = () => (dispatch, getState) => {
  
  // Get full state and then select the pieces required for the transaction
  const state = getState();
  const sendFields = sendCoinsSelector(state);

  if (!isValidSendTransaction(sendFields)) {
    return;
  }

  // create payload and merge into POST request options
  const payload = {
    body: JSON.stringify(sendFields)
  };
  const options = makePostOptions(payload);

  // signal sendCoins start and attempt send
  dispatch(sendCoinsStart());
  fetch('api/v1/bitgo/sendCoins', options)
    .then(isValidStatusCode)
    .then(toJSON)
    .then((json) => {
      // signal success, redirect to send completed page
      dispatch(sendCoinsSuccess());
      dispatch(push('/sendComplete'));
    })
    .catch((err) => {
      // signal failure, redirect to send completed page
      dispatch(sendCoinsFail());
      console.log('Send Coins Failed!', err)
      dispatch(push('/sendComplete'));
    });
};

