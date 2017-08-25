import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import Balance from './Balance';
import * as actions from './balance-actions';

// Other container components do not have class components because they do
// not need access to component life-cycle methods
// Here we want to automatically fetch all wallets when user enter this screen
// (after sending a payment, or logging in) so we'll need to hook into the
// componentDidMount() life-cycle event.
class BalanceContainer extends React.Component {

  // When Balance is done being loaded onto the page, fetch wallet balances.
  componentDidMount() {
    const {
      onFetchWallets,
      onFetchBalance,
    } = this.props;

    onFetchWallets()
    .then(() => {
      onFetchBalance();
    })
    .catch(err => {
      console.log('Fetch Wallets failed', err);
    });
  }
  render() {
    const {
      isLoggedIn,
      wallets,
      fetchingBalance,
      onSelectWallet,
    } = this.props;
    return (
      <Balance
        isLoggedIn={isLoggedIn}
        wallets={wallets}
        fetchingBalance={fetchingBalance}
        onSelectWallet={onSelectWallet}/>
    );
  }
}

// Select pieces of store and pass them as props into BalanceContainer below
// Balance Container will use some, and pass the rest to <Balance /> from  Balance.js
const mapStateToProps = (state) => {
  const {
    login: {
      isLoggedIn,
    } = {},
    balance: {
      wallets,
      fetchingBalance,
    } = {},
  } = state;
  return {
    isLoggedIn,
    wallets,
    fetchingBalance,
  };
};

// Supply actions defined in balance-actions.js with 'dispatch' and pass them
// as props to BalanceContainer. Balance will use some, and pass the rest to
// <Balance /> from Balance.js
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

