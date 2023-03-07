import React from 'react';
import { Image, View } from 'react-native';

import { Styles } from './Home.styles';
import { Icons } from '../../themes/Icons';
import { Colors } from '../../themes/Colors';
import Text from '../../components/Text/Text.component';
import Header from '../../components/Header/Header.component';
import Button from '../../components/Button/Button.component';

const Home = () => {
  return (
    <>
      <Header />
      <View style={Styles.container}>
        <Image
          source={Icons.POKEMON_STARTERS}
          style={Styles.pokemonStarters}
          resizeMode="contain"
        />
        <View>
          <Text size={42} thickness="bold" style={Styles.title}>
            {'All the Pokémon data you\'ll ever need in one place!'}
          </Text>
          <Text size={20} color={Colors.GREY_600} style={Styles.subTitle}>
            Thousands of data compiled into one place
          </Text>
          <Button text="Check Pokédex" style={Styles.checkPokedexButton} />
        </View>
      </View>
    </>
  );
};

export default Home;
