import { StyleSheet } from 'react-native';

import { Colors } from '../../themes/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.AMBER_400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});

export { Styles };
