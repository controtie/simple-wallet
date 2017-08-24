import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputBox.css';

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

