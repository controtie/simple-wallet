import * as types from './balance-action-types';

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

// API call to fetch current provided wallet
export const fetchBalance = (username, password, otp) => (dispatch) => {
  dispatch(fetchingBalanceStart());
  fetch('api/v1/bitgo/wallets')
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => {
      console.log('Error fetching wallets!', err);
    });
};

