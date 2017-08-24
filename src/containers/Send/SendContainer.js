import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import Send from './Send';
import * as actions from './send-actions';

const mapStateToProps = (state) => {
  const {
    login: {
      isLoggedIn,
    } = {},
    send: {
      otp,
      password,
      amount,
      destinationAddress,
      sendCoins: {
        sending,
      } = {},
    } = {},
  } = state;
  return {
    isLoggedIn,
    otp,
    password,
    amount,
    destinationAddress,
    sending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateAmountField: (event) => {
      dispatch(actions.updateAmountField(event.target.value));
    },
    onUpdatePasswordField: (event) => {
      dispatch(actions.updatePasswordField(event.target.value));
    },
    onUpdateOTPField: (event) => {
      dispatch(actions.updateOTPField(event.target.value));
    },
    onUpdateDestinationAddressField: (event) => {
      dispatch(actions.updateDestinationAddressField(event.target.value));
    },
    onSendCoins: () => {
      dispatch(actions.sendCoins());
    },
    onNavigateBack: () => {
      dispatch(goBack());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);

