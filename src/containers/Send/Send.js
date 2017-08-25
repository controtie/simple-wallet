import React from 'react';
import PropTypes from 'prop-types';
import RedirectToLogin from '../RedirectToLogin/';
import ActionButton from '../../components/ActionButton';
import InputBox from '../../components/InputBox';
import '../../styles/LoadingSpinner.css';
import '../../styles/Send.css';

const Send = (props) => {
  const {
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
    onNavigateBack,
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

Send.defaultProps = {
  onUpdateAmountField: () => {},
  onUpdatePasswordField: () => {},
  onUpdateOTPField: () => {},
  onUpdateDestinationAddressField: () => {},
  onNavigateBack: () => {},
  onSendCoins: () => {},
};

Send.propTypes = {
  isLoggedIn: PropTypes.bool,
  sending: PropTypes.bool,
  otp: PropTypes.string,
  password: PropTypes.string,
  amount: PropTypes.number,
  destinationAddress: PropTypes.string,
  onUpdateAmountField: PropTypes.func,
  onUpdatePasswordField: PropTypes.func,
  onUpdateOTPField: PropTypes.func,
  onUpdateDestinationAddressField: PropTypes.func,
  onNavigateBack: PropTypes.func,
  onSendCoins: PropTypes.func,
};

export default Send;

