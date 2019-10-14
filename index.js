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
      stack: {
        children: [
          {
            component: {
              name: appScreens.homeScreen,
              options: {
                topBar: {
                  title: {
                    text: 'Home Screen',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
