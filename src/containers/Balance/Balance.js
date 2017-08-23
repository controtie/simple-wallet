import React from 'react';

const Balance = (props) => {
  const {
    isLoggedIn,
    fetchBalance,
  } = props;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div>
      <p> Fetch Balance </p>
      <button onClick={fetchBalance}>
        fetch balance
      </button>
    </div>
  );
};

export default Balance;

