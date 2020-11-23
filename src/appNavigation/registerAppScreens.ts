import HomeScreen from 'screens/HomeScreen';
import WrappedComponent from 'appStore/WrappedComponent';
import { registerScreens } from 'react-native-navigation-register-screens';
import LoaderScreen from 'screens/LoaderScreen';
import TopFlashMessages from 'components/navigation/TopFlashMessages/TopFlashMessages';

export default function registerAppScreens() {
  registerScreens(
    [LoaderScreen, HomeScreen, TopFlashMessages],
    // @ts-ignore
    WrappedComponent
  );
}
