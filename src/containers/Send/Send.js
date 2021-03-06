import React from 'react';
import PropTypes from 'prop-types';
import RedirectToLogin from '../RedirectToLogin/';
import ActionButton from '../../components/ActionButton';
import InputBox from '../../components/InputBox';
import '../../styles/LoadingSpinner.css';
import '../../styles/Send.css';

// A form to send coins from the currently selected wallet to destinationAddress
// Each value of each field in this form is controlled via store
// to update the value of a given field, we must call the corresponding
// update action (e.g. onUpdatePasswordField)
const Send = (props) => {
  const {
    label,
    balance,
    isLoggedIn,
    sending,
    otp,
    password,
    amount,
    destinationAddress,
    onUpdateAmountField,
    onUpdatePasswordField,
    onUpdateOTPField,
    onUpdateDestinationAddressField,
    onRedirectToWallet,
    onSendCoins,
  } = props;

  if (!isLoggedIn) {
    return <RedirectToLogin />;
  }

  if (sending) {
    return (
      <div className="send-container">
        <p>Sending Coins...</p>
        <div className="loading-spinner"/>
      </div>
    );
  }

  return (
    <div className="send-container">
      <p> Send Coins from {label}</p>
      <p> Balance: {'\u0243'} {balance}</p>
      <InputBox
        number
        label="Amount (satoshis)"
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
        onClick={onRedirectToWallet} />
    </div>
  );
};

Send.defaultProps = {
  onUpdateAmountField: () => {},
  onUpdatePasswordField: () => {},
  onUpdateOTPField: () => {},
  onUpdateDestinationAddressField: () => {},
  onRedirectToWallet: () => {},
  onSendCoins: () => {},
};

Send.propTypes = {
  label: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLoggedIn: PropTypes.bool,
  sending: PropTypes.bool,
  otp: PropTypes.string,
  password: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  destinationAddress: PropTypes.string,
  onUpdateAmountField: PropTypes.func,
  onUpdatePasswordField: PropTypes.func,
  onUpdateOTPField: PropTypes.func,
  onUpdateDestinationAddressField: PropTypes.func,
  onRedirectToWallet: PropTypes.func,
  onSendCoins: PropTypes.func,
};

export default Send;

