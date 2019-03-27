import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage, Alert} from "react-native";
import {Header, Text, Button, Icon} from "react-native-elements";

export default class Thankyou extends Component {
    static navigationOptions = {
        title: 'Submit'
    };

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View>
                <Header centerComponent={{text: 'Thanks!', style: {color: '#fff'}}}/>
                <View style={{padding: 15}}>
                    <Text style={styles.instructions}>Thank you for your participation!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    instructions: {
        paddingTop: 10,
        fontSize: 15,
        lineHeight: 17
    },
    text: {
        lineHeight: 25
    },
    bold: {
        fontWeight: 'bold'
    },
    center: {
        textAlign: 'center'
    }
});
