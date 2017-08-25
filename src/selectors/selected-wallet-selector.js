import { createSelector } from 'reselect';

const selectedWallet = (state) => {
  const {
    balance: {
      selectedWallet: walletId,
      wallets,
    } = {},
  } = state;

  return {
    walletId,
    wallets,
  };
};

export default createSelector(
  [ selectedWallet ],
  (wallet) => {
  });
