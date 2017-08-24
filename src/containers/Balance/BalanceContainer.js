import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import Balance from './Balance';
import * as actions from './balance-actions';

class BalanceContainer extends React.Component {

  componentDidMount() {
    const {
      onFetchWallets,
      onFetchBalance,
    } = this.props;

    onFetchWallets()
    .then(() => {
      onFetchBalance();
    })
    .catch(() => {
      console.log('Fetch Wallets failed');
    });
  }
  render() {
    const {
      wallets,
      fetchingBalance,
      onSelectWallet,
    } = this.props;
    return (
      <Balance
        wallets={wallets}
        fetchingBalance={fetchingBalance}
        onSelectWallet={onSelectWallet}/>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    balance: {
      wallets,
      fetchingBalance,
    } = {},
  } = state;
  return {
    wallets,
    fetchingBalance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchWallets: () => {
      return dispatch(actions.fetchWallets());
    },
    onFetchBalance: () => {
      return dispatch(actions.fetchBalance());
    },
    onSelectWallet: (walletId) => {
      dispatch(actions.selectWallet(walletId));
      dispatch(push('/send'));
    },
  };
};

BalanceContainer.propTypes = {
  wallets: PropTypes.arrayOf(PropTypes.object),
  onFetchWallets: PropTypes.func,
  onFetchBalance: PropTypes.func,
  onSelectWallet: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer);

