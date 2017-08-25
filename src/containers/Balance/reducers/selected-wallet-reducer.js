import * as types from '../balance-action-types';

// this reducer will hold the walletId of the currently selected Wallet
// When we call 'sendCoins' this walletId is used as the input wallet

// We could store the entire wallet object of the selected wallet here,
// but it makes sense to store as little state as possible/avoid data
// duplication. Using the 'reselect' library all derivations
// (finding balances and labels of selectedWallet) is memoized and inexpensive.
const selectedWallet = (state = '', action = {}) => {
  switch (action.type) {
    case types.BALANCE_SELECT_WALLET:
      return action.walletId;
    default:
      return state;
  }
};

export default selectedWallet;

