import {
  isValidStatusCode,
  toJSON,
  makePostOptions,
} from '../../utils/api-helpers';
import * as types from './balance-action-types';
import walletIdSelector from '../../selectors/wallet-selector';

// fetching-balance-reducer.js - the status of the fetching-wallets request
// controls a loading spinner
export const fetchingBalanceStart = () => {
  return {
    type: types.BALANCE_GET_BALANCE,
  };
};
export const fetchingBalanceSuccess = () => {
  return {
    type: types.BALANCE_GET_BALANCE_SUCCESS,
  };
};
export const fetchingBalanceFail = () => {
  return {
    type: types.BALANCE_GET_BALANCE_FAILURE,
  };
};

// wallets-reducer.js - updates the list of all of User's available wallets
export const updateWallets = (wallets) => {
  return {
    type: types.BALANCE_UPDATE_WALLETS,
    wallets,
  };
};

// selected-wallet-reducer.js - stores the id of the selected wallet
// See: BalanceContainer.js and Balance.js for usage
export const selectWallet = (walletId) => {
  return {
    type: types.BALANCE_SELECT_WALLET,
    walletId,
  };
};

// Fetch all wallets for User's BitGo account
export const fetchWallets = (username, password, otp) => (dispatch) => {
  dispatch(fetchingBalanceStart());
  return fetch('api/v1/bitgo/wallets')
    .then(isValidStatusCode)
    .then(toJSON)
    .then((json) => {
      // update store with retrieved list of all wallets
      dispatch(updateWallets(json));
    })
    .catch((err) => {
      dispatch(fetchingBalanceFail());
      console.log('Error fetching wallets!', err);
    });
};

// Fetch all balances for all of User's BitGo wallets
export const fetchBalance = (username, password, otp) => (dispatch, getState) => {
  const state = getState();
  const walletIds = walletIdSelector(state);
  const payload = { body: JSON.stringify(walletIds) };
  const options = makePostOptions(payload);

  fetch('api/v1/bitgo/walletBalances', options)
    .then(isValidStatusCode)
    .then(toJSON)
    .then((json) => {
      dispatch(fetchingBalanceSuccess());
      // update store with retrieved list of all wallets + meta data
      dispatch(updateWallets(json));
    })
    .catch((err) => {
      dispatch(fetchingBalanceFail());
      console.log('Error fetching wallets!', err);
    });
};

