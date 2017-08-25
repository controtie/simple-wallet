import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import '../../styles/Logout.css';

// Displays connected logout button if user is logged in
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

Logout.defaultProps = {
  onLogout: () => {},
};

Logout.propTypes = {
  isLoggedIn: PropTypes.bool,
  onLogout: PropTypes.func,
};


export default Logout;

