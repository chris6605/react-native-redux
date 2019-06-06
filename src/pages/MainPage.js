import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';


import { NavigationActions } from 'react-navigation';


import *as loginActions from '../actions/LoginActions';

class MainPage extends Component {

    static navigationOptions = {
        title: 'MainPage'
    }


    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.status == 0) {
        //     this.props.navigation.pop()
        // }
    }



    render() {
        const name = this.props.user && this.props.user.name || ''
        const password = this.props.user && this.props.user.password || ''
        return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>


            <View style={{ width: 375, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: 'blue' }}>name:</Text>
                <Text style={{ marginLeft: 10, fontSize: 16, color: '#333' }}>{name}</Text>
            </View>

            <View style={{ marginTop: 20, width: 375, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: 'blue' }}>password:</Text>
                <Text style={{ marginLeft: 10, fontSize: 16, color: '#333' }}>{password}</Text>
            </View>

            <View style={{ marginTop: 50, width: 375, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#999' }}>登录状态:</Text>
                <Text style={{ marginLeft: 10, fontSize: 16, color: '#333' }}>{this.props.message}</Text>
            </View>

            <TouchableOpacity style={{ backgroundColor: 'red', marginTop: 200 }}
                onPress={() => {
                    this.props.logoutAction()
                }}>
                <Text style={{ fontSize: 16, color: '#fff', paddingHorizontal: 130, paddingVertical: 10 }}>退出登录</Text>
            </TouchableOpacity>

        </View>
    }


}

function mapStateToProps(state) {
    return {
        user: state.LoginReducer.user,
        status: state.LoginReducer.status,
        message: state.LoginReducer.message
    }
}

function matchDispatchToProps(dispatch) {
    let bindAction = bindActionCreators(loginActions, dispatch)

    return {
        logoutAction: bindAction.login_out
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage)











