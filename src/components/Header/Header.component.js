import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { Styles } from './Header.styles';
import { Icons } from '../../themes/Icons';
import Overlay from '../Overlay/Overlay.component';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onPressMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <View style={Styles.container}>
        <Image
          source={Icons.POKEMON_LOGO}
          style={Styles.headerIcon}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={onPressMenu}
          hitSlop={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}
        >
          <Image
            source={open ? Icons.CLOSE : Icons.HAMBURGER_MENU}
            style={Styles.hamburgerMenu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {
        open && <Overlay />
      }
    </>
  );
};

export default Header;
