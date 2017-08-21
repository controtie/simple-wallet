import * as types from './balance-action-types';
import bitgo from '../../api/bitgo';

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
};

