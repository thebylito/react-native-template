import { StyleSheet } from 'react-native';
import { appColors } from 'utils/appColors';
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
    fontSize: appMetrics.FONT_SIZE_TITLE,
    textAlign: 'center',
    color: appColors.white,
    marginHorizontal: 20,
  },
  updateStatus: {
    fontSize: appMetrics.FONT_SIZE,
    textAlign: 'center',
    color: appColors.white,
  },
});

export default styles;
