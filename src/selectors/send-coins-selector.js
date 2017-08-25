export default (state) => {
  const {
    balance: {
      selectedWallet: walletId,
    } = {},
    send: {
      otp,
      password,
      destinationAddress,
      amount,
    } = {},
  } = state;

  return {
    walletId,
    otp,
    password,
    destinationAddress,
    amount,
  };
};

