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
  (wallets) => {
    const {
      id,
      wallets,
    } = wallets;

    const selectedWallet = wallets.find(wallet => wallet.id === id);
    const {
      id,
      label,
      balance,
    } = selectedWallet;
    return {
      id,
      label,
      balance,
    };
  });

