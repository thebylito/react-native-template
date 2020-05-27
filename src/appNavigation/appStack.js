import { Navigation } from 'react-native-navigation';
import { appScreens } from 'appNavigation';

export const goLoaderScreen = ({ handleUpdate }) => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: appScreens.loaderScreen,
              passProps: { handleUpdate },
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const goHomeScreen = () => {
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
};
