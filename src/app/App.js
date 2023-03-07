import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Styles } from './App.styles';
import { Colors } from '../themes/Colors';
import RootNavigator from '../navigation/Root.navigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={Styles.safeAreaView}>
        <StatusBar
          backgroundColor={Colors.WHITE}
          barStyle="dark-content"
        />
        <View style={Styles.container}>
          <RootNavigator />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
