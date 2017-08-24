import * as types from '../balance-action-types';

const selectedWallet = (state = '', action = {}) => {
  switch (action.type) {
    case types.BALANCE_SELECT_WALLET:
      return action.walletId;
    default:
      return state;
  }
};

export default selectedWallet;

