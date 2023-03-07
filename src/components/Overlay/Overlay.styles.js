import { StyleSheet } from 'react-native';

import { Colors } from '../../themes/Colors';

const Styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.GREY_400_TRANSPARENT,
  },
});

export { Styles };
