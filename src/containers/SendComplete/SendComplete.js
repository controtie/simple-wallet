import React from 'react';
import PropTypes from 'prop-types';
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
    onRedirectToSend,
  } = props;

  if (!isLoggedIn) {
    return <RedirectToLogin />;
  }

  if (!success) {
    return (
      <div>
        <p> Send Failure! Your coins have not moved.</p>
        <p>Please try again. </p>
        <ActionButton
          text="Go Back"
          onClick={onRedirectToSend} />
      </div>
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

SendComplete.defaultProps = {
  onRedirectToWallet: () => {},
  onRedirectToSend: () => {},
};

SendComplete.propTypes = {
  success: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  amount: PropTypes.number,
  destinationAddress: PropTypes.string,
  onRedirectToWallet: PropTypes.func,
  onRedirectToSend: PropTypes.func,
};

export default SendComplete;

