import React, {Component} from 'react';
import createRootNavigator from './config/router';
import {AsyncStorage} from "react-native";


export default class App extends Component {

    render() {
        const Layout = createRootNavigator(1);
        return <Layout />;
    }
}
