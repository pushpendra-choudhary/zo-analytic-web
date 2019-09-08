import React, {Component} from 'react';
import RootRouter from './AppRoutes/RootRouter';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './Config/Store';

export default class App extends Component {
  render() {
    const storeObject = configureStore();
    const {store, persiststore} = storeObject;
    return (
      <Provider store={store}>
        <PersistGate persistor={persiststore}>
          <RootRouter />
        </PersistGate>
      </Provider>
    );
  }
}
