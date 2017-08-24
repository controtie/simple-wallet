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

