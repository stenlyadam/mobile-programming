import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import FriendScreen from './screens/FriendScreen';
import HomeScreen from './screens/HomeScreen';


const navigator = createStackNavigator({
  Component: ComponentScreen,
  Friend: FriendScreen,
  Home: HomeScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'App Mobile Programming',
    headerStyle: {
      backgroundColor: 'grey'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
