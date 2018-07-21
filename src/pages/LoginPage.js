import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import * as loginAction from '../actions/LoginActions';

import * as themeAction from '../actions/ThemeActions';

import { NavigationActions } from 'react-navigation';

import MainPage from './MainPage';



class LoginPage extends Component {
    static navigationOptions = {
        title: 'LoginPage'
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === '登录成功' && nextProps.isSuccess) {
            this.props.navigation.push('Main', { user: nextProps.user });
        }
        return true
    }


    render() {
        //   const { login } = this.props
        console.log(this.props)
        return <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#cdcdcd', marginTop: 200 }}
                onPress={() => {
                    this.props.dispatch(loginAction.login());
                }}>
                <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>登录</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 20, fontSize: 16, color: '#3333' }}>{this.props.status}</Text>
            <View style={{ width: 100, height: 50, backgroundColor: this.props.color, marginTop: 20 }} />
            <TouchableOpacity style={{ backgroundColor: '#cdcdcd', marginTop: 20 }}
                onPress={() => {
                    this.props.dispatch(themeAction.redAction());
                }}>
                <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>紅色</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#cdcdcd', marginTop: 20 }}
                onPress={() => {
                    this.props.dispatch(themeAction.blueAction());
                }}>
                <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>藍色</Text>
            </TouchableOpacity>
        </View>
    }
}


function select(store) {
    return {
        status: store.LoginReducer.status,
        isSuccess: store.LoginReducer.isSuccess,
        user: store.LoginReducer.user,
        color: store.themeReducer.color
    }
}

export default connect(select)(LoginPage)


