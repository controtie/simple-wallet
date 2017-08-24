import React from 'react';
import { toBTC } from '../../utils/data-helpers';

const SendComplete = (props) => {
  const {
    isFailed,
    amount,
    destinationAddress,
  } = props;

  if (isFailed) {
    return (
      <p> Send Failure! Your coins have not moved. Please try again </p>
    );
  }

  return (
    <div>
      <p> {`Success! ${toBTC(amount)} has been sent to ${destinationAddress}`} </p>
    </div>
  );
};

export default SendComplete;

