import React from 'react';

const Send = (props) => {
  const {
    otp,
    password,
    amount,
    destinationAddress,
    onUpdateAmountField,
    onUpdatePasswordField,
    onUpdateOTPField,
    onUpdateDestinationAddressField,
    onNavigateBack,
    onSendCoins,
  } = props;

  return (
    <div>
      <p> Send Coins </p>
      <p> Amount </p>
      <input
        type="number"
        value={amount}
        onChange={onUpdateAmountField} />
      <p> Destination Address </p>
      <input
        value={destinationAddress}
        onChange={onUpdateDestinationAddressField} />
      <p> Password </p>
      <input
        type="password"
        value={password}
        onChange={onUpdatePasswordField} />
      <p> OTP </p>
      <input
        value={otp}
        onChange={onUpdateOTPField} />
      <button onClick={onSendCoins}> Submit </button>
      <button onClick={onNavigateBack}> Back </button>
    </div>
  );
};

export default Send;

