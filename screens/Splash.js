import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar, AsyncStorage
} from 'react-native';

export default class Splash extends Component {
    static navigationOptions = {
        title: 'TouchMetric'
    };

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            AsyncStorage.getItem('agreed').then((agreed) => {
                if (agreed === '1') {
                    navigate('Instructions')
                } else {
                    navigate('Terms')
                }
            }).catch(() => {
                navigate('Terms')
            })
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                <Image
                    source={require('../images/plurilock.png')}
                />
                <Text style={styles.welcome}>
                    TouchMetric
                </Text>
                <Text style={styles.instructions}>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6D7A',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#F5FCFF',
        marginBottom: 5,
    },
});
