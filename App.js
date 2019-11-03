import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import Component2Screen from './screens/Component2Screen';
import FriendScreen from './screens/FriendScreen';

export default function App() {
  return (
    
      <FriendScreen />
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
