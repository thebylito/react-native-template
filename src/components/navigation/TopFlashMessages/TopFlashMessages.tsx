import React from 'react';
import FlashMessage, {
  showMessage,
  MessageOptions,
} from 'react-native-flash-message';
import { Navigation } from 'react-native-navigation';
import { appComponents } from 'appNavigation';

export const showNotification = async (
  options: MessageOptions
): Promise<void> => {
  await Navigation.showOverlay({
    component: {
      name: appComponents.topFlashMessages,
      options: {
        overlay: {
          interceptTouchOutside: false,
        },
        layout: {
          componentBackgroundColor: 'transparent',
          orientation: ['portrait'],
        },
      },
    },
  });
  showMessage({ ...options, autoHide: true });
};

type TopFlashMessagesProps = {
  componentId: string;
};

const TopFlashMessages = ({ componentId }: TopFlashMessagesProps) => {
  const onHide = () => {
    Navigation.dismissOverlay(componentId);
  };

  return (
    <FlashMessage
      titleStyle={{ textAlign: 'center' }}
      position="top"
      // @ts-ignore
      onHide={onHide}
    />
  );
};

TopFlashMessages.screenName = appComponents.topFlashMessages;

export default TopFlashMessages;
