import {
  Navigation,
  Options,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

const setDefaultOptions = async () => {
  Navigation.setDefaultOptions({});
};

type PushScreenType = {
  componentId: string;
  title: string;
  screen: string;
  passProps: any;
  options: Options;
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
  title?: string;
  screen: string;
  passProps?: any;
  options?: Options;
};

const showModal = async ({
  title,
  screen,
  passProps = {},
  options = {},
}: ShowModalType) => {
  return Navigation.showModal({
    stack: {
      children: [
        {
          component: {
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
              modalPresentationStyle:
                OptionsModalPresentationStyle.overCurrentContext,
              ...options,
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

const dismissModal = (componentId: string) => async () => {
  Navigation.dismissModal(componentId);
};

const navigationService = {
  setDefaultOptions,
  pushScreen,
  showModal,
  setRoot,
  dismissModal,
};

export default navigationService;
