/**
 * @format
 */

import 'config/reactotronConfig';
import { Navigation } from 'react-native-navigation';
import registerScreens from 'appNavigation/registerScreens';
import codePush from 'react-native-code-push';
import { goLoaderScreen } from 'appNavigation/appStack';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  const update = await codePush.checkForUpdate();
  goLoaderScreen({ handleUpdate: update && update.isMandatory });
});
