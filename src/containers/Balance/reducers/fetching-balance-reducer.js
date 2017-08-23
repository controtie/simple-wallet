import * as types from '../balance-action-types';

// This reducer will return true if Balance is currently being fetched,
// used for displaying loading spinner
const fetchingBalance = (state = false, action = {}) => {
  switch (action.type) {
    case types.BALANCE_GET_BALANCE:
      return true;
    case types.BALANCE_GET_BALANCE_SUCCESS:
      return false;
    case types.BALANCE_GET_BALANCE_FAILURE:
      return false;
    default:
      return state;
  }
};

export default fetchingBalance;

