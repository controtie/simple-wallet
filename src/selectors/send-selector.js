import { createSelector } from 'reselect';
import walletSelector from './wallet-selector';

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
  [ sendSelector, walletSelector ],
  (sendInfo, wallets) => {
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
    } = wallets;

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

