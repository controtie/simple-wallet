import { createSelector } from 'reselect';
import selectedWalletSelector from './selected-wallet-selector';

const sendSelector = (state) => {
  const {
    login: {
      isLoggedIn,
    } = {},
    send: {
      amount,
      destinationAddress,
      otp,
      password,
      sendCoins: {
        sending,
      } = {},
    } = {},
  } = state;

  return {
    amount,
    destinationAddress,
    isLoggedIn,
    otp,
    password,
    sending,
  };
};


export default createSelector(
  [ sendSelector, selectedWalletSelector ],
  (sendInfo, selectedWallet) => {
    const {
      amount,
      destinationAddress,
      isLoggedIn,
      otp,
      password,
      sending,
    } = sendInfo;
    const {
      balance,
      id,
      label,
    } = selectedWallet;

    return {
      amount,
      balance,
      destinationAddress,
      id,
      isLoggedIn,
      label,
      otp,
      password,
      sending,
    };
  });

