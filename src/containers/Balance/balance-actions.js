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
  const login = { username, password, otp };
  if (!username || !password || !otp) {
    console.log('Please provide the required fields');
    return;
  }
  const options = {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(login),
  };

  dispatch(fetchingBalanceStart());
  fetch('api/v1/bitgo/login', options)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

