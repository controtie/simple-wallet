import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ActionButton.css';

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

