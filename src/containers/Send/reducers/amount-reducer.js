import * as types from '../send-action-types';

const amount = (state = 0, action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_AMOUNT:
      return action.amount;
    default:
      return state;
  }
};

export default amount;

