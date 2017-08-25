import { createSelector } from 'reselect';

const walletsSelector = (state) => {
  const {
    balance: {
      selectedWallet: id,
      wallets,
    } = {},
  } = state;

  return {
    id,
    wallets,
  };
};

// since this selection requires some data manipulation
// (filtering wallet on wallet.id)
// it makes sense to memoize the process with 'reselect'
export default createSelector(
  [ walletsSelector ],
  (allWallets) => {
    const {
      id,
      wallets,
    } = allWallets;

    const selectedWallet = wallets.find(wallet => wallet.id === id);
    const {
      label,
      balance,
    } = selectedWallet || {};

    return {
      id,
      label,
      balance,
    };
  });

