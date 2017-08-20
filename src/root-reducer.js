import { combineReducers } from 'redux';
import balance from './containers/Balance/balance-reducer';

// This root reducer is the base of the application state tree:
// SCHEMA GOES HERE

export default combineReducers({
  balance,
});

