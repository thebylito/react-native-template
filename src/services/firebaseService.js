import { firebase } from '@react-native-firebase/analytics';

const setCurrentScreen = async (screen, classe) => {
  await firebase.analytics().setCurrentScreen(screen, classe);
};

const logEvent = async (eventName, data = {}) => {
  await firebase.analytics().logEvent(eventName, data);
};

const setUserProperty = async (name, value) => {
  await firebase.analytics().setUserProperty(name, value);
};

const firebaseService = {
  setCurrentScreen,
  logEvent,
  setUserProperty,
};

export default firebaseService;
