import React from 'react';
import { Text as RNText } from 'react-native';
import {
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import { Styles } from './Text.styles';
import { Colors } from '../../themes/Colors';

const Text = ({
  children,
  color,
  size,
  thickness,
  style,
}) => {
  return (
    <RNText style={[Styles.text({ color, size, thickness }), style]}>
      {children}
    </RNText>
  );
};

export default Text;

Text.propTypes = {
  children: string,
  color: string,
  size: oneOfType([string, number]),
  thickness: oneOf(['regular', 'medium', 'bold']),
  style: shape({}),
};

Text.defaultProps = {
  children: '',
  color: Colors.BLACK,
  size: 'medium',
  thickness: 'regular',
  style: {},
};
