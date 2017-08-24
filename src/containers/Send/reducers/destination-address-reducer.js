import * as types from '../send-action-types';

const destinationAddress = (state = '0000000', action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_DESTINATION_ADDRESS:
      return action.destinationAddress;
    default:
      return state;
  }
};

export default destinationAddress;

