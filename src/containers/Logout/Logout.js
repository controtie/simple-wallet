import React from 'react';

const Logout = (props) => {
  const {
    isLoggedIn,
    onLogout,
  } = props;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="login-container">
      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

