import React from 'react';

export default (props) => {
  const {
    label,
    balance,
    permissions,
  } = props || {};
  return (
    <div>
      <p> {label} </p>
      <p> {balance} </p>
      <p> {permissions} </p>
    </div>
  );
};

