import * as types from '../balance-action-types';

const wallets = (state = [], action = {}) => {
  switch (action.type) {
    case types.BALANCE_UPDATE_WALLETS:
      return action.wallets;
    default:
      return state;
  }
};

export default wallets;

