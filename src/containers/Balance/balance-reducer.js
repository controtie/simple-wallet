import { combineReducers } from 'redux';
import fetchingBalance from './reducers/fetching-balance-reducer';

export default combineReducers({
  fetchingBalance,
});

