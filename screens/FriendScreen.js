import React from 'react';
import { Text, StyleSheet, FlatList, View} from 'react-native';

const friends = [
    {name: 'Friend #1', alamat: 'Unklab'},
    {name: 'Friend #2', alamat: 'Unklab'},
    {name: 'Friend #3', alamat: 'Unklab'},
    {name: 'Friend #4', alamat: 'Unklab'},
    {name: 'Friend #5', alamat: 'Unklab'},
    {name: 'Friend #6', alamat: 'Unklab'},
    {name: 'Friend #7', alamat: 'Unklab'},
    {name: 'Friend #8', alamat: 'Unklab'},
    {name: 'Friend #9', alamat: 'Unklab'}
]

const FriendScreen = () => {
    return (
        <FlatList 
            data={friends}
            renderItem={({ item }) => 
                <View style={styles.textStyle}>
                    <Text >
                        {item.name}
                    </Text>
                    <Text>
                        {item.alamat}
                    </Text>
                </View>
            }
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 80
    }
});

export default FriendScreen;