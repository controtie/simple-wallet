import * as types from '../send-action-types';

// This piece of state corresponds to the password field on the send coins form.
// This is required unlock the wallet and allow spending
const password = (state = '', action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_PASSWORD:
      return action.password;
    default:
      return state;
  }
};

export default password;

