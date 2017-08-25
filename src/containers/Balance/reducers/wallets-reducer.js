import * as types from '../balance-action-types';

// Stores a list of all wallets for the logged in BitGo user
// This store is updated from two functions, fetchWallets
// and fetchBalance in balance-actions.js.
// fetchBalance is strictly a decoration of fetchWallets'
// output, so it is okay to overwrite fetchWallets' output here
const wallets = (state = [], action = {}) => {
  switch (action.type) {
    case types.BALANCE_UPDATE_WALLETS:
      return action.wallets;
    default:
      return state;
  }
};

export default wallets;

