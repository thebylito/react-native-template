import { StyleSheet } from 'react-native';
import { appColors } from 'utils/appColors';
import { appFonts } from 'utils/appFonts';
import appMetrics from 'utils/appMetrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 28,
  },
  updateMessage: {
    fontFamily: appFonts.primaryBold,
    fontSize: appMetrics.FONT_SIZE_TITLE,
    textAlign: 'center',
    color: appColors.white,
    marginHorizontal: 20,
  },
  updateStatus: {
    fontFamily: appFonts.primary,
    fontSize: appMetrics.FONT_SIZE,
    textAlign: 'center',
    color: appColors.white,
  },
});

export { styles };
