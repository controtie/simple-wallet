import * as types from '../send-action-types';

// This piece of state corresponds to the destination address field
// on the send coins form.
// specifies where coins will be sent TO
const destinationAddress = (state = '', action = {}) => {
  switch (action.type) {
    case types.SEND_COINS_DESTINATION_ADDRESS:
      return action.destinationAddress;
    default:
      return state;
  }
};

export default destinationAddress;

