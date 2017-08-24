import React from 'react';
import ActionButton from '../../components/ActionButton';
import '../../styles/Logout.css';

const Logout = (props) => {
  const {
    isLoggedIn,
    onLogout,
  } = props;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <ActionButton
      classes="logout-button"
      text="Logout"
      onClick={onLogout} />
  );
};

export default Logout;

