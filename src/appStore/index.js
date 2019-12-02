import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import reducers from 'appStore/ducks';
import rootSaga from 'appStore/sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const sagaMonitor = __DEV__ ? Reactotron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const persistedReducer = persistReducer(persistConfig, reducers);
const middlewares = [sagaMiddleware];

const createCompose = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      Reactotron.createEnhancer()
    )
  : compose(applyMiddleware(...middlewares));

// monta a store
export default () => {
  const store = createStore(persistedReducer, createCompose);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
