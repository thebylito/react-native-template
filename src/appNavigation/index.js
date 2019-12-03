import React from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import AppStoreProvider from 'appStore/AppStoreProvider';
import HomeScreen from 'screens/HomeScreen';

export const isAndroid = Platform.OS === 'android';

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

export const appStacks = {
  bottomTabs: 'bottomTabs',
};

export const appScreens = {
  homeScreen: 'homeScreen',
};

export default () => {
  Navigation.registerComponent(appScreens.homeScreen, () => WrappedComponent(HomeScreen));
};
