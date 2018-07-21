/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MainPage from './src/pages/MainPage';

import LoginPage from './src/pages/LoginPage';

import { StackNavigator, createStackNavigator } from 'react-navigation';

const mScreenWidth = Dimensions.get('window').width
const mScreenHeight = Dimensions.get('window').height

export default class App extends Component {

  StackNav = null
  constructor(props) {
    super(props)
    this.state = {

    }

    this.initNavigation()
  }

  componentDidMount() {

  }


  initNavigation() {
    this.StackNav = createStackNavigator({
      Login: { screen: LoginPage },
      Main: { screen: MainPage }
    }, {
        initialRouteName: 'Login'
      }
    );

  }


  render() {
    return <View style={{ width: mScreenWidth, height: mScreenHeight }}>

      <this.StackNav />

    </View>
  }




}












