import React from 'react';
import { TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';

import { Styles } from './Button.styles';
import { Colors } from '../../themes/Colors';
import Text from '../Text/Text.component';

const Button = ({
  text,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.container, style]}>
      <Text
        color={Colors.WHITE}
        size="large"
        thickness="bold"
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  text: string,
  onPress: func,
  style: shape({}),
};

Button.defaultProps = {
  text: 'Enter Text',
  onPress: null,
  style: {},
};
