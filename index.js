/**
 * @format
 */

import 'config/reactotronConfig';
import {Navigation} from 'react-native-navigation';
import registerScreens, {appScreens} from 'appNavigation/index';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: appScreens.homeScreen,
      },
    },
  });
});
