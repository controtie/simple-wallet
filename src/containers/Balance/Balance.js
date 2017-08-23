import React from 'react';
import Wallet from '../../components/Wallet';

const Balance = (props) => {
  const {
    wallets,
    onFetchBalance,
    onFetchWallets,
  } = props;

  return (
    <div>
      <p> Fetch Balance </p>
      <button onClick={onFetchWallets}>
        fetch balance
      </button>
      {
        Array.isArray(wallets) && wallets.map((wallet) => {
          return <Wallet label={wallet.label} />
        })
      }
    </div>
  );
};

export default Balance;

