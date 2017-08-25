import React from 'react';
import PropTypes from 'prop-types';
import { trimBalance } from '../utils/data-helpers';
import '../styles/Wallet.css';

const Wallet = (props) => {
  const {
    label,
    balance,
    onSelectWallet,
    isSpendable,
  } = props || {};

  const handleOnSelect = () => {
    if (isSpendable) {
      onSelectWallet();
    }
  };

  return (
    <div
      className="wallet-container"
      onClick={handleOnSelect}>
      <p> {label} </p>
      <p> {'\u0243'} {trimBalance(balance)} </p>
      {
        !isSpendable ?
        <p> permissions required </p>
        : <p> ready to use </p>
      }
    </div>
  );
};

Wallet.defaultProps = {
  onSelectWallet: () => {},
};

Wallet.propTypes = {
  label: PropTypes.string,
  balance: PropTypes.number,
  permissions: PropTypes.string,
  onSelectWallet: PropTypes.func,
};

export default Wallet;

