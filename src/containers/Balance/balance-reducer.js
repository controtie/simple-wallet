import { combineReducers } from 'redux';
import fetchingBalance from './reducers/fetching-balance-reducer';
import selectedWallet from './reducers/selected-wallet-reducer';
import wallets from './reducers/wallets-reducer';

export default combineReducers({
  fetchingBalance,
  wallets,
  selectedWallet,
});

