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
  } = props;

  return (
    <div>
      <p> Send Coins </p>
      <p> Amount </p>
      <input
        value={amount}
        onChange={onUpdateAmountField} />
      <p> Password </p>
      <input
        value={destinationAddress}
        onChange={onUpdateDestinationAddressField} />
      <p> Destination Address </p>
      <input
        value={password}
        onChange={onUpdatePasswordField} />
      <p> OTP </p>
      <input
        value={otp}
        onChange={onUpdateOTPField} />
    </div>
  );
};

export default Send;

