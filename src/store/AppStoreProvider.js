// @flow
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from '.';

const {persistor, store} = configureStore();

class AppStoreProvider extends PureComponent {
  static childContextTypes = {
    store: PropTypes.shape({}),
  };

  getChildContext() {
    return {
      store,
    };
  }

  render() {
    const {children} = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}

export default AppStoreProvider;
