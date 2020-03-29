import { Navigation, Options } from 'react-native-navigation';
import appColors from 'utils/appColors';
import { appStacks } from 'appNavigation';

const setDefaultOptions = () => {
  Navigation.setDefaultOptions({
    topBar: {
      title: {
        color: appColors.white,
        fontWeight: 'bold',
      },
      background: {
        color: appColors.primary,
      },
      backButton: {
        color: appColors.white,
      },
    },
  });
};

type PushScreenType = {
  componentId: string,
  title: string,
  screen: string,
  passProps: string,
  options: Options,
};

function pushScreen({
  componentId,
  title,
  screen,
  passProps = {},
  options = {},
}: PushScreenType) {
  Navigation.push(componentId, {
    component: {
      name: screen,
      id: screen,
      passProps,
      options: {
        topBar: {
          title: {
            text: title,
          },
        },
        ...options,
      },
    },
  });
}

type ShowModalType = {
  title: string,
  screen: string,
  passProps: string,
};

const showModal = ({ title, screen, passProps = {} }: ShowModalType) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: screen,
            name: screen,
            passProps,
            options: {
              topBar: {
                title: {
                  text: title,
                },
                visible: false,
                animate: true,
              },
              layout: {
                direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
                backgroundColor: 'transparent',
              },
              modalPresentationStyle: 'overCurrentContext',
            },
          },
        },
      ],
    },
  });
};

const setRoot = async (screen: string) => {
  Navigation.setRoot({
    root: {
      component: {
        name: screen,
      },
    },
  });
};

const setCurrentRootTab = async (screen: string) => {
  Navigation.mergeOptions(appStacks.bottomTabs, {
    bottomTabs: {
      currentTabId: screen,
    },
    sideMenu: {
      left: {
        visible: false,
      },
    },
  });
};

const navigationService = {
  setCurrentRootTab,
  setDefaultOptions,
  pushScreen,
  showModal,
  setRoot,
};

export default navigationService;
