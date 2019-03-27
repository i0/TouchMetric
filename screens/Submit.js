import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage, Alert} from "react-native";
import {Header, Text, Button, Icon} from "react-native-elements";
import {extract} from '../helpers/logger'

export default class Submit extends Component {
    static navigationOptions = {
        title: 'Submit'
    };

    constructor(props) {
        super(props);
        this.state = {disableSubmit: true, submitText: 'Submit'};
        this.checkToken();
    };

    checkToken() {
        AsyncStorage.getItem('token').then((token) => {
            if (token === null) {
                let request = fetch('http://nserc.plurilock.com:8090/api/request-token').then((response) => response.json())
                    .then((data) => {
                        AsyncStorage.setItem('token', data.message.token);
                        this.setState({disableSubmit: false, token: data.message.token})
                    });
            } else {
                this.setState({disableSubmit: false, token: token})
            }
        }).catch((e) => {
            Alert.alert(
                'Failed',
                'Could not store the data',
                [
                    {text: 'OK'},
                ]
            )
        })
    }

    submit() {
        this.setState({disableSubmit: true, submitText: 'Submitting...'})
        let data = extract();
        const {navigate} = this.props.navigation.navigate;
        fetch('http://nserc.plurilock.com:8090/api/ios-users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: this.state.token,
                log: JSON.stringify(data),
            }),
        }).then(() => {
            this.props.navigation.navigate('Thankyou')
        });
    }

    render() {
        return (
            <View>
                <Header centerComponent={{text: 'Submit', style: {color: '#fff'}}}/>
                <View style={{padding: 15}}>
                    <Text style={styles.instructions}>Thank you for participating in this research. Press the submit
                        button to complete the submission of the data</Text>
                    <Text style={styles.instructions}>Again to reiterate, no personal identifiable data will be
                        collected or used in our study, we will just be using the touch behavior data collected during
                        your interaction with the app.</Text>
                    <View>

                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Button icon={{name: 'send', color: 'white'}}
                                    disabled={this.state.disableSubmit}
                                    title={this.state.submitText}
                                    buttonStyle={{
                                        backgroundColor: "rgba(34, 99,216, 1)",
                                        borderColor: "transparent",
                                        borderWidth: 0,
                                        borderRadius: 5,
                                        height: 40
                                    }}
                                    onPress={() => {
                                        this.submit()
                                    }}
                                    textStyle={{fontSize: 13, textAlign: 'center', fontWeight: '500'}}
                                    style={{margin: 20}}
                            />
                        </View>
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
