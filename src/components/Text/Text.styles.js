import { StyleSheet } from 'react-native';

import { Fonts } from '../../themes/Fonts';

const returnFontSize = (size) => {
  switch (size) {
    case 'small':
      return 10;
    case 'medium':
      return 14;
    case 'large':
      return 20;
    default:
      return size;
  }
};

const returnFontFamily = (thickness) => {
  switch (thickness) {
    case 'regular':
      return Fonts.PoppinsRegular;
    case 'medium':
      return Fonts.PoppinsMedium;
    case 'bold':
      return Fonts.PoppinsBold;
    default:
      return Fonts.PoppinsRegular;
  }
};

const Styles = StyleSheet.create({
  text: ({ color, size, thickness }) => ({
    color,
    fontSize: returnFontSize(size),
    fontFamily: returnFontFamily(thickness),
  }),
});

export { Styles };
