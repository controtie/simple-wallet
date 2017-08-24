import React from 'react';
import RedirectToLogin from '../RedirectToLogin/';
import ActionButton from '../../components/ActionButton';
import InputBox from '../../components/InputBox';
import '../../styles/Send.css';

const Send = (props) => {
  const {
    isLoggedIn,
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

  if (!isLoggedIn) {
    return <RedirectToLogin />;
  }

  return (
    <div className="send-container">
      <p> Send Coins </p>
      <InputBox
        number
        label="Amount"
        value={amount}
        onChange={onUpdateAmountField} />
      <InputBox
        label="Destination Address"
        value={destinationAddress}
        onChange={onUpdateDestinationAddressField} />
      <InputBox
        password
        label="Password"
        value={password}
        onChange={onUpdatePasswordField} />
      <InputBox
        label="Google Auth Password"
        value={otp}
        onChange={onUpdateOTPField} />
      <ActionButton
        classes="send-submit"
        text="Submit"
        onClick={onSendCoins} />
      <ActionButton
        classes="send-navigate-back"
        text="Back"
        onClick={onNavigateBack} />
    </div>
  );
};

export default Send;

