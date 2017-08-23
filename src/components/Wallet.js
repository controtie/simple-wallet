import React from 'react';
import Balance from '../containers/Balance/BalanceContainer';
import Login from '../containers/Login/LoginContainer';
import Logout from '../containers/Logout/LogoutContainer';

// This component is the entry point for the two Wallet components:
// 1. Send Payment component
// 2. View Balance component

const Wallet = (props) => {
  return (
    <div>
      <p> Wallet goes here! </p>
      <Login />
      <Balance />
      <Logout />
    </div>
  );
};

export default Wallet;

