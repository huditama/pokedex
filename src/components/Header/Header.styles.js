import { StyleSheet } from 'react-native';

import { Colors } from '../../themes/Colors';

const Styles = StyleSheet.create({
  container: {
    zIndex: 9999,
    height: 50,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    height: 50,
    width: 100,
  },
  hamburgerMenu: {
    height: 20,
    width: 20,
  },
});

export { Styles };
