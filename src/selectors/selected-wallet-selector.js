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

