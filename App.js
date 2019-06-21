
import React, {PureComponent} from 'react';
import Routes from './src/screens/Routes';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './src/redux/reducers';
import {Root} from 'native-base'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends PureComponent {
  render() {
    return (
      <Root>
      <Provider store={store}>
        <Routes />
         </Provider>
         </Root>
    );

  }
}

