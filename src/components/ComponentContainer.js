import React from 'react';
import Logout from '../containers/Logout/';
import '../styles/ComponentContainer.css';

// This component houses Login, Balance, and Send pages
// inside a bordered div.
// It also displays the Simple Wallet header and Logout Button
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
