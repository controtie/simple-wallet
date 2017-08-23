import React from 'react';

export default (props) => {
  const {
    label,
    permissions,
  } = props || {};
  return (
    <div>
      <p> {label} </p>
    </div>
  );
};

