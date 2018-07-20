import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';


export default class MainPage extends Component {

    static navigationOptions = {
        title: 'MainPage'
    }

    logout() {
        this.props.navigation.navigate('LoginPage')
    }

    render() {
        return <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#cdcdcd', marginTop: 200 }}
                onPress={() => { this.logout() }}>
                <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>退出登录</Text>
            </TouchableOpacity>
        </View>
    }


}











