import {Component} from "react";
import {StyleSheet, View} from "react-native";


class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {display: 1};
        setInterval(() => {
            this.setState({display: this.state.display ? 0 : 1})
        }, 500);
    }

    render() {
        return (
            <View style={{opacity: this.state.display}}>
                <Text style={styles.bigblue}>Greetings {this.props.name}</Text>
            </View>
        );
    }
}

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'default'
        };
    }

    render() {
        return (
            <View>
                <Text style={styles.bigblue}>HomeScreen</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 100
    }
});
