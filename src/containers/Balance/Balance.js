import React from 'react';
import PropTypes from 'prop-types';
import Wallet from '../../components/Wallet';
import { toBTC } from '../../utils/data-helpers';
import '../../styles/Balance.css';

const Balance = (props) => {
  const {
    wallets,
    onSelectWallet,
  } = props;

  return (
    <div className="balance-container">
      <p> Select a Wallet </p>
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
  );
};

Balance.defaultProps = {
  onSelectWallet: () => {},
};

Balance.propTypes = {
  wallets: PropTypes.arrayOf(PropTypes.object),
  onSelectWallet: PropTypes.func,
};

export default Balance;

