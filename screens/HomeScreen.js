import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
       <View>
           <Text>Home Screen</Text>
           <Button 
                title="Go to component Screen"
                onPress={() => navigation.navigate('Component')}
           />
           <Button 
                title="Go to friend Screen"
                onPress={() => navigation.navigate('Friend')}
           />
           <Button 
                title="Go to image Screen"
                onPress={() => navigation.navigate('Image')}
           />
            <Button 
                title="Go to counter Screen"
                onPress={() => navigation.navigate('Counter')}
           />
       </View>
    );
};

export default HomeScreen;