import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer,} from 'redux-persist';
import Storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import AppReducers from '../Reducers/RootReducer';

let reduxStore;
let persiststore;
let storeMiddleWares = [];

const persistConfig = {
  key: 'root',
  storage: Storage,
  whitelist: ['auth'],
};

// storeMiddleWares.push(logger);

const persistedReducer = persistReducer(persistConfig, AppReducers);

const configureStore = () => {
  if (!reduxStore) {
    // creating a store with reducers and middleWares
    const allMiddleWares = applyMiddleware(...storeMiddleWares);
    reduxStore = createStore(persistedReducer, allMiddleWares);
    persiststore = persistStore(reduxStore);

    return {store: reduxStore, persiststore};
  }
  return {store: reduxStore, persiststore};
};

export default configureStore;
