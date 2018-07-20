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
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.navigation.state.params.user.name,
            age: this.props.navigation.state.params.user.age
        }
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params)
    }

    logout() {
        this.props.navigation.pop()
    }

    render() {
        return <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#cdcdcd', marginTop: 200 }}
                onPress={() => { this.logout() }}>
                <Text style={{ fontSize: 16, color: '#333333', paddingHorizontal: 10, paddingVertical: 3 }}>退出登录</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 50, fontSize: 16, color: 'blue' }}>姓名: {this.state.name}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, color: 'blue' }}>年龄: {this.state.age}</Text>
        </View>
    }


}











