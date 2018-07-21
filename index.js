/** @format */

import { name as appName } from './app.json';

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Root from './src/Root';


export default class reduxTest extends Component {
    render() {
        return (
            <Root />
        )
    }
}

AppRegistry.registerComponent(appName, () => reduxTest);
