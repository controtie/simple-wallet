import * as types from '../send-action-types';

// This piece of state corresponds to the amount field on the send coins form.
// specifies the amount of BTC to be sent in satoshis
const amount = (state = 0, action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_AMOUNT:
      return action.amount;
    default:
      return state;
  }
};

export default amount;

