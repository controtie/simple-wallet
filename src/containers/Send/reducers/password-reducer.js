import * as types from '../send-action-types';

const password = (state = '0000000', action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_PASSWORD:
      return action.password;
    default:
      return state;
  }
};

export default password;

