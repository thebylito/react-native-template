import { Dimensions } from 'react-native';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;
const xScreen = Dimensions.get('screen').width;
const yScreen = Dimensions.get('screen').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const baseUnit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

const ELEVATION_IOS = {
  shadowOpacity: 0.2,
  shadowOffset: {
    height: 1,
  },
  shadowRadius: 1,
};

// Then we set our styles with the help of the em() function
const appMetrics = {
  // GENERAL
  DEVICE_WIDTH: x,
  SCREEN_WIDTH: xScreen,
  DEVICE_HEIGHT: y,
  SCREEN_HEIGHT: yScreen,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),
  MARGIN_HORIZONTAL: 20,

  // CARD
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  MARGIN_R_HEADER: { marginRight: 15 },
  ELEVATION_IOS,
};

export default appMetrics;
