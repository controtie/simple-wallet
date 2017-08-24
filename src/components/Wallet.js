import React from 'react';

export default (props) => {
  const {
    label,
    balance,
    permissions,
    onSelectWallet,
  } = props || {};
  return (
    <div>
      <p> {label} </p>
      <p> {balance} </p>
      <p> {permissions} </p>
      <button onClick={onSelectWallet}> select wallet </button>
    </div>
  );
};

