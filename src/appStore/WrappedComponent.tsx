import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppStoreProvider from 'appStore/AppStoreProvider';
import paperTheme from 'config/theme';

export const WrappedComponent = (Component: React.FunctionComponent) => (
  props: any
) => (
  <AppStoreProvider>
    <PaperProvider theme={paperTheme}>
      <Component {...props} />
    </PaperProvider>
  </AppStoreProvider>
);

export default WrappedComponent;
