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

import * as countAction from '../actions/CountActions'

import *as loginActions from '../actions/LoginActions';

class MainPage extends Component {

    static navigationOptions = {
        title: 'MainPage'
    }

    outData = {
        status: '请重新登录',
        isSuccess: false,
        user: null
    }

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.navigation.state.params.user.name,
            age: this.props.navigation.state.params.user.age
        }
    }

    componentDidMount() {

    }

    logout() {
        this.props.navigation.pop()
    }

    render() {
        return <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#cdcdcd', marginTop: 200 }}
                onPress={() => {
                    this.logout()
                    this.props.dispatch(loginActions.login_out(this.outData))
                }}>
                <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>退出登录</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 50, fontSize: 16, color: 'blue' }}>姓名: {this.state.name}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, color: 'blue' }}>年龄: {this.state.age}</Text>

            <Text style={{ marginTop: 20, fontSize: 14, color: '#333' }}>{this.props.count}</Text>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <TouchableOpacity style={{ backgroundColor: '#cdcdcd' }}
                    onPress={() => {
                        this.props.dispatch(countAction.increase())
                    }}>
                    <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>加</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#cdcdcd' }}
                    onPress={() => {
                        this.props.dispatch(countAction.deincrease())
                    }}>
                    <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>减</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#cdcdcd' }}
                    onPress={() => {
                        this.props.dispatch(countAction.reset())
                    }}>
                    <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>重置</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: 100, height: 50, backgroundColor: this.props.color, marginTop: 20 }} />
        </View>
    }


}

function select(store) {
    return {
        count: store.countReducer.count,
        color: store.themeReducer.color,
    }
}

export default connect(select)(MainPage)











