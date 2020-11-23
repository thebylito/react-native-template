import { DefaultTheme, configureFonts } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
import { appColors } from 'utils/appColors';

const fontConfig = configureFonts({});

const paperTheme: Theme = {
  ...DefaultTheme,
  fonts: fontConfig,
  colors: {
    ...DefaultTheme.colors,
    primary: appColors.primary,
    surface: appColors.white,
    text: appColors.black,
  },
};

export default paperTheme;
