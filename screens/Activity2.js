import React, {Component} from 'react';
import {Header, Text, Button} from "react-native-elements";
import {ScrollView, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, PanResponder} from "react-native";
import CustomSlider from "../components/CustomSlider";
import logger from '../helpers/logger'

export default class Activity2 extends Component {
    static navigationOptions = {
        title: 'Activity 2'
    };

    constructor(props) {
        super(props);
        this.state = {nextActivityButtonDisabled: true}
    };

    activeSlider = null
    _panResponder: {};
    actived = [];

    componentWillMount() {
        const $ = this
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: function (e, gestureState) {
            },
            onMoveShouldSetPanResponder: function () {
                return true;
            },
            onPanResponderGrant: function (e, gestureState) {
                if ($.activeSlider) {
                    logger(2, e.nativeEvent, 'slide', $.activeSlider)
                } else {
                    logger(2, e.nativeEvent, 'start')
                }
            },
            onPanResponderMove: function (e, gestureState) {
                logger(2, e.nativeEvent, 'move')
            },
            onPanResponderRelease: function (e, gestureState) {
                logger(2, e.nativeEvent, 'end')
            },
            onPanResponderTerminate: function (e, gestureState) {
            },
        });
    };

    componentDidMount() {
    };

    released(slider) {
        if (this.actived.indexOf(slider) < 0) {
            this.actived.push(parseInt(slider));
        }
        if (this.actived.indexOf(1) >= 0 && this.actived.indexOf(2) >= 0 && this.actived.indexOf(3) >= 0) {
            this.setState({nextActivityButtonDisabled: false})
        }
        this.activeSlider = 0;
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Header centerComponent={{text: 'Activity 2', style: {color: '#fff'}}}/>
                <View style={{padding: 15}}>
                    <Text style={styles.heading} h4>Swipe using Thumb</Text>
                    <Text style={styles.instructions}>Please drag and swipe the seek bar from 0 to the maximum
                        value.</Text>
                    <View {...this._panResponder.panHandlers}>
                        <CustomSlider value={0} onPress={(slider) => {
                            this.activeSlider = slider;
                        }} onRelease={(slider) => this.released(slider)} value="1"/>
                        <CustomSlider value={0} onPress={(slider) => {
                            this.activeSlider = slider;
                        }} onRelease={(slider) => this.released(slider)} value="2"/>
                        <CustomSlider value={0} onPress={(slider) => {
                            this.activeSlider = slider;
                        }} onRelease={(slider) => this.released(slider)} value="3"/>

                    </View>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Button disabled={this.state.nextActivityButtonDisabled} icon={{name: 'navigate-next', color: 'white'}}
                                iconRight
                                title="Next Activity"
                                buttonStyle={{
                                    backgroundColor: "rgba(92, 99,216, 1)",
                                    borderColor: "transparent",
                                    borderWidth: 0,
                                    borderRadius: 5,
                                    alignSelf: 'flex-end',
                                    height: 40
                                }}
                                onPress={() => {
                                    navigate('Activity3')
                                }}
                                textStyle={{fontSize: 13, textAlign: 'center', fontWeight: '500'}}
                        />
                    </View>
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
        fontSize: 13,
        lineHeight: 17
    },
    box1: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        textAlign: 'center'
    }
});
