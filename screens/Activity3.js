import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, PanResponder} from "react-native";
import {Header, Text, Button, Icon} from "react-native-elements";
import {Input} from 'react-native-elements';
import wordList from '../resources/words'
import CustomSlider from "../components/CustomSlider";
import {typeLogger} from '../helpers/logger'


export default class Activity3 extends Component {
    static navigationOptions = {
        title: 'Activity 3'
    };
    textInput = null;
    words = [];

    constructor(props) {
        super(props);
        // words
        let letters = wordList(5)
        let j = 0;
        for (let i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                this.words.push(letters[j++])
            } else {
                let min = 100000000;
                let max = 999999999;
                this.words.push(Math.floor(Math.random() * (max - min + 1)) + min);
            }
        }
        let counter = this.words.length;
        this.state = {nextDisabled: true, text: '', word: this.words.shift(), counter: counter}
    };

    typed(string) {
        if (this.state.nextDisabled && string) {
            this.setState({nextDisabled: false})
        }
        if (!this.state.nextDisabled && !string) {
            this.setState({nextDisabled: true})
        }
        typeLogger(string, this.state.counter, this.state.word)
    };

    nextWord() {
        let counter = this.words.length
        if (counter > 0) {
            this.setState({text: ' '})
            setTimeout(() => {
                this.setState({text: ''})
            }, 1)
            this.setState({word: this.words.shift(), counter: counter, nextDisabled: true});
        } else {
            this.props.navigation.navigate('Submit')
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Header centerComponent={{text: 'Activity 3', style: {color: '#fff'}}}/>
                <View style={{padding: 15}}>
                    <Text style={styles.heading} h4>Type</Text>
                    <Text style={styles.text}>Number of tries remaining: {this.state.counter}</Text>
                    <Text style={styles.text}>Type in the following:</Text>
                    <Text style={[styles.text, styles.bold, styles.center]}>{this.state.word}</Text>
                    <Input
                        placeholder='Please enter the text here'
                        clearButtonMode="while-editing"
                        autoCapitalize="none"
                        onChangeText={(text) => this.typed(text)}
                        value={this.state.text.toString()}
                        ref={element => {
                            this.textInput = element
                        }}
                    />
                    <View style={{flex: 1, flexDirection: 'column', marginTop: 5}}>
                        <Button disabled={this.state.nextDisabled}
                                iconRight
                                title="Next"
                                buttonStyle={{
                                    backgroundColor: "rgba(92, 99,216, 1)",
                                    borderColor: "transparent",
                                    borderWidth: 0,
                                    borderRadius: 5,
                                    alignSelf: 'flex-end',
                                    height: 40
                                }}
                                onPress={() => {
                                    this.nextWord()
                                }}
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
