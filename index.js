/**
 * @format
 */

import 'config/reactotronConfig';
import { Navigation } from 'react-native-navigation';
import registerAppScreens from 'appNavigation/registerAppScreens';
import codePush from 'react-native-code-push';
import { goLoaderScreen } from 'appNavigation/appStack';
import navigationService from 'appNavigation/navigationService';

registerAppScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  await navigationService.setDefaultOptions();
  const update = await codePush.checkForUpdate();
  goLoaderScreen({ handleUpdate: update && update.isMandatory });
});
