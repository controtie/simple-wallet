import React from 'react';
import Logout from '../containers/Logout/';
import '../styles/ComponentContainer.css';

export default (props) => {
  const {
    children,
  } = props;
  return (
    <div className="App">
      <p> Simple BitGo Wallet </p>
      <div className="component-container">
        { children }
      </div>
      <Logout />
    </div>
  );
};
