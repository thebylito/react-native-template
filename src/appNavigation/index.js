import React from 'react';
import {Navigation} from 'react-native-navigation';
import AppStoreProvider from 'store/AppStoreProvider';
import HomeScreen from 'screens/HomeScreen';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <AppStoreProvider>
        <Component {...props} />
      </AppStoreProvider>
    );
    return <EnhancedComponent />;
  };
}

export const appScreens = {
  homeScreen: 'homeScreen',
};

export default () => {
  Navigation.registerComponent(appScreens.homeScreen, () =>
    WrappedComponent(HomeScreen),
  );
};
