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
export const fetchBalance = () => (dispatch) => {

  dispatch(fetchingBalanceStart());
  fetch('api/v1/bitgo/fetchBalance')
    .then((res) => res.json())
    .then((json) => console.log(json));
};

