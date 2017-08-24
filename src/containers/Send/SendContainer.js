import { connect } from 'react-redux';
import Send from './Send';
import * as actions from './send-actions';

const mapStateToProps = (state) => {
  const {
    send: {
      wallets,
    } = {},
  } = state;
  return {
    wallets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);

