import { combineReducers } from 'redux';
import sendCoins from './reducers/send-coins-reducer';
import amount from './reducers/amount-reducer';
import destinationAddress from './reducers/destination-address-reducer';
import otp from './reducers/otp-reducer';
import password from './reducers/password-reducer';

// These pieces of state will be found under 'state.send' in the root store
export default combineReducers({
  sendCoins,
  amount,
  destinationAddress,
  otp,
  password,
});

