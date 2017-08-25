import * as types from '../send-action-types';

const defaultState = {
  sending: false,
  success: false,
};

// This piece of state relects the sending status of a given transaction
// used for displaying a loading spinner, and controlling SendComplete screen
const sendingCoins = (state = defaultState, action = {}) => {
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

