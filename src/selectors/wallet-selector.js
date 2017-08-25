import { createSelector } from 'reselect';

const walletSelector = (state) => {
  const {
    balance: {
      wallets
    } = {},
  } = state;
  return wallets;
};

// since this selection requires some data manipulation
// (mapping wallets to walletIds)
// it makes sense to memoize the process with 'reselect'
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
