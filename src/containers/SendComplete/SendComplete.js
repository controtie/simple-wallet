import React from 'react';
import ActionButton from '../../components/ActionButton';
import { toBTC } from '../../utils/data-helpers';
import RedirectToLogin from '../RedirectToLogin/';

const SendComplete = (props) => {
  const {
    success,
    isLoggedIn,
    amount,
    destinationAddress,
    onRedirectToWallet,
  } = props;

  if (!isLoggedIn) {
    return <RedirectToLogin />;
  }

  if (!success) {
    return (
      <p> Send Failure! Your coins have not moved. Please try again </p>
    );
  }

  return (
    <div>
      <p> {`Success! ${toBTC(amount)} has been sent to ${destinationAddress}`} </p>
      <ActionButton
        text="Continue"
        onClick={onRedirectToWallet} />
    </div>
  );
};

export default SendComplete;

