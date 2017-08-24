import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import ComponentContainer from './components/ComponentContainer';
import Login from './containers/Login/';
import Balance from './containers/Balance/';
import Send from './containers/Send/';

// Create new browser history, and allow it to intercept changes to redux store as middleware
// Apply thunks to redux, allowing delayed calling of 'dispatch'
const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(thunk, historyMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// This is the root component of the application to be mounted on the DOM.
// The component is wrapped with a Provider that has access to our application store
// All subcomponents have access to the store with react-redux 'connect' method
// They also have access to browser history with react-router-redux 'push' method
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ComponentContainer>
            <Route exact path="/" component={Login} />
            <Route path="/wallets" component={Balance} />
            <Route path="/send" component={Send} />
          </ComponentContainer>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

