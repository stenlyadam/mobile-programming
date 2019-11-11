import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class CounterScreen extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    render(){
        return (
            <View>
                <Text> Counter Screen </Text>
                <Button 
                    title="Tambah"
                    onPress={
                        ()=> this.setState({ counter: this.state.counter+1})
                    }
                />
                <Button 
                    title="Kurang"
                    onPress={
                        ()=> this.setState({ counter: this.state.counter-1})
                    }
                />
                <Text>Current Count: {this.state.counter}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({});