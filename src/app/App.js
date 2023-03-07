import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from 'react-native';

import { Styles } from './App.styles';
import { Colors } from '../themes/Colors';

const App = () => {
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <StatusBar
        backgroundColor={Colors.DARK_CERULEAN}
        barStyle="light-content"
      />
      <View style={Styles.container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
