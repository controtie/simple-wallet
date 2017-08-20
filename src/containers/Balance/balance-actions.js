import * as types from './balance-action-types';

export const fetchingBalanceStart = () => {
  return {
    type: types.BALANCE_GET_BALANCE,
  };
}
export const fetchingBalanceSuccess = () => {
  return {
    type: types.BALANCE_GET_BALANCE_SUCCESS,
  };
}
export const fetchingBalanceFail = () => {
  return {
    type: types.BALANCE_GET_BALANCE_FAILURE,
  };
}

export const fetchBalance = () => (dispatch) => {
  dispatch(fetchingBalanceStart());
};

