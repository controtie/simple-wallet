import React from 'react';

const Logout = (props) => {
  const {
    isLoggedIn,
  } = props;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="login-container">
      <button>
        Logout
      </button>
    </div>
  );
};

export default Logout;

