import React from 'react';

const Balance = (props) => {
  const {
    isLoggedIn,
    onFetchBalance,
    onFetchWallets,
  } = props;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div>
      <p> Fetch Balance </p>
      <button onClick={onFetchWallets}>
        fetch balance
      </button>
    </div>
  );
};

export default Balance;

