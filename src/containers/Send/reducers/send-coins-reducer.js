import * as types from '../balance-action-types';

// This reducer will return true if coins are being sent
// used for displaying loading spinner
const sendingCoins = (state = false, action = {}) => {
  switch (action.type) {
    case types.SEND_COINS:
      return true;
    case types.SEND_COINS_SUCCESS:
      return false;
    case types.SEND_COINS_FAILURE:
      return false;
    default:
      return state;
  }
};

export default sendingCoins;

