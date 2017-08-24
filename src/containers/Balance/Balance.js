import React from 'react';
import Wallet from '../../components/Wallet';
import { toBTC } from '../../utils/data-helpers';

const Balance = (props) => {
  const {
    wallets,
  } = props;

  return (
    <div>
      <p> Your Wallets </p>
      {
        Array.isArray(wallets) && wallets.map((wallet) => {
          const {
            id,
            label,
            balance,
            permissions,
          } = wallet || {};
          return (
            <Wallet
              key={id}
              label={label}
              balance={toBTC(balance)}
              permissions={permissions} />
          );
        })
      }
    </div>
  );
};

export default Balance;

