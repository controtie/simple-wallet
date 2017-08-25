import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputBox.css';

// All Input Fields in Simple Wallet use this InputBox
// This keeps styling simple and consistent
// individual input fields can still be styled by passing
// in a classes prop to use as a special selector
// Input type (email, password, number) can be specified via props
const InputBox = (props) => {
  const {
    password,
    number,
    email,
    label,
    value,
    onChange,
  } = props;

  const type =
  password ? "password"
  : number ? "number"
  : email ? "email"
  : "text"

  return (
    <div>
      <p> {label} </p>
      <input
        className="input-box"
        type={type}
        value={value}
        onChange={onChange} />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};
InputBox.defaultProps = {
  onChange: () => {},
};

export default InputBox;

