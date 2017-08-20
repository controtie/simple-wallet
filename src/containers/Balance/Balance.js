import React from 'react';

const Balance = (props) => {
  const {
    fetchBalance,
  } = props;

  return (
    <div>
      <p> Balance goes here! </p>
      <button onClick={fetchBalance}>
        fetch balance
      </button>
    </div>
  );
};

export default Balance;

