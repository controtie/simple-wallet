import React from 'react';
import Balance from '../containers/Balance/';

// This component is the entry point for the two Wallet components:
// 1. Send Payment component
// 2. View Balance component

const Wallet = (props) => {
  return (
    <div>
      <p> Wallet goes here! </p>
      <Balance />
    </div>
  );
};

export default Wallet;

