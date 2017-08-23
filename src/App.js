import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import './styles/App.css';
import RootComponent from './components/RootComponent';

// 1. Configure redux store to accept 'redux-thunk' middleware
// 2. createStore with root-reducer as application state tree
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// This is the root component of the application to be mounted on the DOM.
// The component is wrapped with a Provider that has access to our application store
// All subcomponents have access to the store with react-redux 'connect' method
// With 'connect' each subcomponent can listen directly to the store,
// no passing of props required
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RootComponent />
        </div>
      </Provider>
    );
  }
}

export default App;

