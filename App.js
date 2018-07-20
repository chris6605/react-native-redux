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
  View
} from 'react-native';

import MainPage from './src/pages/MainPage';

import LoginPage from './src/pages/LoginPage';

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginPage },
  Main: { screen: MainPage }

}, {
    initialRouteName: 'Login'
  }
);


export default App





