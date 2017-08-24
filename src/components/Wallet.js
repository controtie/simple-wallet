import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Wallet.css';

const Wallet = (props) => {
  const {
    label,
    balance,
    permissions,
    onSelectWallet,
  } = props || {};
  return (
    <div
      className="wallet-container"
      onClick={onSelectWallet}>
      <p> {label} </p>
      <p> {balance} </p>
      <p> {permissions} </p>
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

