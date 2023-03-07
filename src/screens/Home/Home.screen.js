import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header/Header.component';

import { Styles } from './Home.styles';

const Home = () => {
  return (
    <View style={Styles.container}>
      <Header />
    </View>
  );
};

export default Home;
