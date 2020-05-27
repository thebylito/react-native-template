import config from 'react-native-ultimate-config';
import CodePush from 'react-native-code-push';
import { isAndroid } from 'appNavigation';

const iosCodePushKeys = {
  debug: config?.CODEPUSH_IOS_DEBUG_KEY,
  release: config?.CODEPUSH_IOS_RELEASE_KEY,
};

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  ...(!isAndroid && {
    deploymentKey: __DEV__ ? iosCodePushKeys.debug : iosCodePushKeys.release,
  }),
};

export default codePushOptions;
