import React from 'react';
import PropTypes from 'prop-types';
import Wallet from '../../components/Wallet';
import RedirectToLogin from '../RedirectToLogin/';
import { toBTC } from '../../utils/data-helpers';
import '../../styles/Balance.css';
import '../../styles/LoadingSpinner.css';

const Balance = (props) => {
  const {
    wallets,
    isLoggedIn,
    fetchingBalance,
    onSelectWallet,
  } = props;

  if (!isLoggedIn) {
    return <RedirectToLogin />;
  }

  if (fetchingBalance) {
    return (
      <div className="balance-container">
        <p> Fetching Balances... </p>
        <div className="loading-spinner"/>
      </div>
    );
  }

  if (wallets.length < 1) {
    return (
      <div>
        <p> You have no wallets. </p>
        <a href='http://bitgo.com'> Click here to go set one up! </a>
      </div>
    );
  }

  return (
    <div className="balance-container">
      <p> Select a Wallet </p>
      <div className="balance-wallets">
        {
          Array.isArray(wallets) && wallets.map((wallet) => {
            const {
              id,
              label,
              balance,
              permissions,
            } = wallet || {};
            return (
              <Wallet
                key={id}
                label={label}
                balance={toBTC(balance)}
                permissions={permissions}
                onSelectWallet={onSelectWallet.bind(undefined, id)} />
            );
          })
        }
      </div>
    </div>
  );
};

Balance.defaultProps = {
  onSelectWallet: () => {},
};

Balance.propTypes = {
  wallets: PropTypes.arrayOf(PropTypes.object),
  isLoggedIn: PropTypes.bool,
  fetchingBalance: PropTypes.bool,
  onSelectWallet: PropTypes.func,
};

export default Balance;

