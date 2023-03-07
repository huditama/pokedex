import React from 'react';
import { View } from 'react-native';
import { node } from 'prop-types';

import { Styles } from './Overlay.styles';

const Overlay = ({ children }) => {
  return (
    <View style={Styles.overlay}>
      {children}
    </View>
  );
};

export default Overlay;

Overlay.propTypes = {
  children: node,
};

Overlay.defaultProps = {
  children: null,
};
