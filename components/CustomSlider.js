import React, {Component} from 'react';
import {Slider, Text} from "react-native-elements";
import {
    ScrollView, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback,
    TouchableNativeFeedback
} from "react-native";
import logger from '../helpers/logger'

export default class CustomSlider extends Component {
    sliding = false;
    start = 0; // timestamp of when user starts sliding
    time = 0; // consumed time
    data = [];
    static navigationOptions = {
        title: 'Activity 2'
    };

    constructor(props) {
        super(props);
        this.state = {value: 0}
    };

    valueChanged = (value) => {
        if (!this.sliding) {
            this.props.onPress(this.props.value)
            this.sliding = true;
            this.start = Date.now();
        }
        this.setState({value: value})
    };

    slidingCompleted = (value) => {
        if (!this.sliding) {
            return false;
        }
        this.props.onRelease(this.props.value)
        this.sliding = false;
        this.time = Date.now() - this.start;
        this.data.push({time: this.time, value: value});
        // console.log(this.data)
    };

    render() {
        return (
            <View style={{justifyContent: 'center'}}>
                <Slider value={this.state.value} onSlidingComplete={(evt) => this.slidingCompleted(evt)}
                        onValueChange={(evt) => this.valueChanged(evt)}/>
                <Text>Percent: {Math.round(this.state.value * 100)}%</Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#F92660',
        width: 150,
        height: 50,
        marginTop: 20,
        marginBottom: 10,
        marginRight: 15,
        padding: 5,
    },
});
