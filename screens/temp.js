import React, {Component} from 'react';
import {Text} from "react-native-elements";
import {PanResponder, View, StyleSheet} from 'react-native';

let CIRCLE_SIZE = 80;
export default class test extends Component {
    render() {
        return (<View
            style={styles.container}>
            <View
                ref={(circle) => {
                    this.circle = circle;
                }}
                style={styles.circle}

            />
        </View>);
    }
}
let styles = StyleSheet.create({
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        backgroundColor: 'red',
        left: 0,
        top: 0,
    },
    container: {
        flex: 1,
        paddingTop: 64,
    },
});
