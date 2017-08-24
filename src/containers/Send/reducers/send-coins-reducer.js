import * as types from '../send-action-types';

const defaultState = {
  sending: false,
  success: false,
};

// This reducer will return true if coins are being sent
// used for displaying loading spinner, and controlling SendComplete screen
const sendingCoins = (state = {}, action = {}) => {
  switch (action.type) {
    case types.SEND_COINS:
      return {
        sending: true,
        success: false,
      };
    case types.SEND_COINS_SUCCESS:
      return {
        sending: false,
        success: true,
      };
    case types.SEND_COINS_FAILURE:
      return {
        sending: false,
        success: false,
      };
    default:
      return state;
  }
};

export default sendingCoins;

