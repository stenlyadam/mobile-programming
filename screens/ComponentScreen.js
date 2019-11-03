import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {

    const name = 'John Doe';
    const showMe = <Text> Hello World</Text>;

    return (
        <View>
            <Image
                style={{width: 200, height: 200}}
                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
            <Text style={{ fontSize: 30, color: 'red' }}> 
                This is Component Screen
            </Text>
            <Text style={styles.textSytle}>
               Hello {name}
            </Text>
            {showMe}
        </View>
    );
};

const styles = StyleSheet.create({
    textSytle: {
        fontSize: 30,
        color: 'red'
    }
});

export default ComponentScreen;

