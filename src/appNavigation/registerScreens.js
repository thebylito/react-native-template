import React from 'react';
import { appScreens } from 'appNavigation';
import LoaderScreen from 'screens/LoaderScreen';
import { Navigation } from 'react-native-navigation';
import AppStoreProvider from 'appStore/AppStoreProvider';
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

export default function registerScreens() {
  Navigation.registerComponent(appScreens.loaderScreen, () =>
    WrappedComponent(LoaderScreen)
  );
  Navigation.registerComponent(appScreens.homeScreen, () =>
    WrappedComponent(HomeScreen)
  );
}
