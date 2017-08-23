import { createSelector } from 'reselect';

const walletSelector = (state) => {
  const {
    balance: {
      wallets
    } = {},
  } = state;
  return wallets;
};

export default createSelector(
  [ walletSelector ],
  (wallets) => {
    return Array.isArray(wallets)
    && wallets.map(wallet => {
      return {
        id: wallet.id
      };
    });
  }
);
