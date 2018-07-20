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

import { NavigationActions } from 'react-navigation';

import MainPage from './MainPage';



class LoginPage extends Component {
    static navigationOptions = {
        title: 'LoginPage'
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === '登录成功' && nextProps.isSuccess) {
            this.props.navigation.push('Main', { user: nextProps.user })
            return false
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
        </View>
    }
}


function select(store) {
    return {
        status: store.LoginReducer.status,
        isSuccess: store.LoginReducer.isSuccess,
        user: store.LoginReducer.user
    }
}

export default connect(select)(LoginPage)


