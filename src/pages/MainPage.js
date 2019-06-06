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


import * as loginActions from '../actions/LoginActions';

import * as countActions from '../actions/CountActions';

import * as themeActions from '../actions/ThemeActions'



class MainPage extends Component {

    static navigationOptions = {
        title: 'Main'
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

        const { user, message, status, count, increaseAction, deincreaseAction, resetAction, redAction, blueAction, color } = this.props

        return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>


            <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: user ? user.icon : 'https://ws3.sinaimg.cn/large/005BYqpggy1g3nqgsgmj9j301s01s3yc.jpg' }} />

            <View style={{ marginTop: 30, width: 375, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: 'blue' }}>昵称:</Text>
                <Text style={{ marginLeft: 10, fontSize: 16, color: '#333' }}>{user.name}</Text>
            </View>

            <View style={{ marginTop: 20, width: 375, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: 'blue' }}>密码:</Text>
                <Text style={{ marginLeft: 10, fontSize: 16, color: '#333' }}>{user.password}</Text>
            </View>

            <View style={{ marginTop: 30, width: 375, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#999' }}>登录状态:</Text>
                <Text style={{ marginLeft: 10, fontSize: 16, color: '#333' }}>{message}</Text>
            </View>


            <Text style={{ marginTop: 40, fontSize: 18, color: '#222' }}>加减demo</Text>
            <View style={{ marginTop: 20, width: 375, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                        deincreaseAction()
                    }}>
                    <Text style={{ fontSize: 28, color: '#333' }}>-</Text>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 60, fontSize: 18, color: 'red' }}>{count}</Text>

                <TouchableOpacity style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                        increaseAction()
                    }}>
                    <Text style={{ fontSize: 24, color: '#333' }}>+</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ paddingLeft: 50 }}
                    onPress={() => {
                        resetAction()
                    }}>
                    <Text style={{ fontSize: 16, color: 'blue' }}>重置</Text>
                </TouchableOpacity>
            </View>


            <Text style={{ marginTop: 40, fontSize: 18, color: '#222' }}>主题切换</Text>
            <View style={{ marginTop: 10, width: 100, height: 40, backgroundColor: color }} />

            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{}}
                    onPress={() => {
                        redAction()
                    }}>
                    <Text style={{ fontSize: 16, color: 'red' }}>红色</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 80 }}
                    onPress={() => {
                        blueAction()
                    }}>
                    <Text style={{ fontSize: 16, color: 'blue' }}>蓝色</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={{ backgroundColor: 'red', marginTop: 50 }}
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
        message: state.LoginReducer.message,
        count: state.countReducer.count,
        color: state.themeReducer.color
    }
}

function matchDispatchToProps(dispatch) {
    let bindLoginAction = bindActionCreators(loginActions, dispatch)
    let bindCountAction = bindActionCreators(countActions, dispatch)
    let bindThemeAction = bindActionCreators(themeActions, dispatch)

    return {
        logoutAction: bindLoginAction.login_out,
        increaseAction: bindCountAction.increase,
        deincreaseAction: bindCountAction.deincrease,
        resetAction: bindCountAction.reset,
        redAction: bindThemeAction.redAction,
        blueAction: bindThemeAction.blueAction
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage)











