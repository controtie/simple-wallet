import {
  isValidStatusCode,
  toJSON,
  makePostOptions,
} from '../../utils/api-helpers';
import * as types from './balance-action-types';
import walletIdSelector from '../../selectors/wallet-selector';

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

export const updateWallets = (wallets) => {
  return {
    type: types.BALANCE_UPDATE_WALLETS,
    wallets,
  };
};

export const selectWallet = (walletId) => {
  return {
    type: types.BALANCE_SELECT_WALLET,
    walletId,
  };
};

// Fetch wallets on associated BitGo account
export const fetchWallets = (username, password, otp) => (dispatch) => {
  dispatch(fetchingBalanceStart());
  return fetch('api/v1/bitgo/wallets')
    .then(isValidStatusCode)
    .then(toJSON)
    .then((json) => {
      dispatch(updateWallets(json));
    })
    .catch((err) => {
      dispatch(fetchingBalanceFail());
      console.log('Error fetching wallets!', err);
    });
};

// API call to fetch current provided wallet
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
      dispatch(updateWallets(json));
    })
    .catch((err) => {
      dispatch(fetchingBalanceFail());
      console.log('Error fetching wallets!', err);
    });
};

