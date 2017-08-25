import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ActionButton.css';

// All buttons in Simple Wallet use this ActionButton
// This keeps styling simple and consistent
// individual buttons can still be styled by passing in a classes prop
// to use as a special selector
const ActionButton = (props) => {
  const {
    classes,
    text,
    onClick,
  } = props;

  const classname = classes ?
    "action-button " + classes
    : "action-button";

  return (
    <button
      className={classname}
      onClick={onClick}>
      {text}
    </button>
  );
};

ActionButton.defaultProps = {
  onClick: () => {},
};
ActionButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ActionButton;

