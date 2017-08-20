import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../../root-reducer';
import '../../styles/App.css';
import Wallet from '../../components/Wallet';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// This component is used for configuration
// 1. Configure redux store with middleware
// 2. createStore with root-reducer
// 3. Wrap component with Provider connected to root-reducer
// All subcomponents will now have access to the created store
// with react-redux 'connect' method
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Wallet />
        </div>
      </Provider>
    );
  }
}

export default App;

