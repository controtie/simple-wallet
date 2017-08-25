import React from 'react';
import ActionButton from '../../components/ActionButton';
import PropTypes from 'prop-types';

const RedirectToLogin = (props) => {
  const {
    onRedirectToLogin,
  } = props;
  return (
    <div>
      <p> You aren't logged in! </p>
      <ActionButton
        text="Click here to Login"
        onClick={onRedirectToLogin} />
    </div>
  );
};

RedirectToLogin.defaultProps = {
  onRedirectToLogin: () => {},
};

RedirectToLogin.propTypes = {
  onRedirectToLogin: PropTypes.func,
};

export default RedirectToLogin;

