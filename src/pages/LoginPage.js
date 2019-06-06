import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as loginAction from '../actions/LoginActions';

import * as themeAction from '../actions/ThemeActions';

import { NavigationActions } from 'react-navigation';

import MainPage from './MainPage';



class LoginPage extends Component {

    static navigationOptions = {
        title: 'Login'
    }

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.status == 1) {
            this.props.navigation.push('Main');
        }
    }



    render() {
        console.log(this.props)
        let { user, loginAction } = this.props
        return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>

            <Image style={{ width: 60, height: 60 }} source={{ uri: user ? user.icon : 'https://ws3.sinaimg.cn/large/005BYqpggy1g3nqgsgmj9j301s01s3yc.jpg' }} />

            <View style={{ width: 375, marginTop: 60, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 20, fontSize: 16, color: 'blue' }}>昵称: </Text>
                <TextInput style={{ marginLeft: 10, flex: 1, fontSize: 13, color: '#333' }}
                    underlineColorAndroid="transparent"
                    value={this.state.name}
                    placeholder='请输入昵称'
                    placeholderTextColor={'#ccc'}
                    onChangeText={(text) => this.setState({ name: text })}
                />
            </View>

            <View style={{ width: 375, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 20, fontSize: 16, color: 'blue' }}>密码: </Text>

                <TextInput style={{ marginLeft: 10, flex: 1, fontSize: 13, color: '#333' }}
                    underlineColorAndroid="transparent"
                    value={this.state.password}
                    placeholder='请输入密码'
                    placeholderTextColor={'#ccc'}
                    onChangeText={(text) => this.setState({ password: text })}
                />
            </View>



            <TouchableOpacity style={{ marginTop: 220, width: 335, height: 36, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}
                onPress={() => {

                    if (this.state.name && this.state.password) {
                        let obj = { name: this.state.name, password: this.state.password, icon: 'https://ws3.sinaimg.cn/large/005BYqpggy1g1qsw2e8bzj30sg0sg0ui.jpg' }
                        loginAction(obj)

                        // 如果不使用matchDispatchToProps 的话可以使用这种方法 dispatch 一个 action
                        //this.props.dispatch(loginAction.requireLogin(obj));

                    } else {
                        alert('请完善登录信息')
                    }
                }}>
                <Text style={{ fontSize: 16, color: '#fff' }}>登录</Text>
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

// 自动绑定 action creators到 dispatch() 函数 这个函数一样 把你要 dispatch 的 action 当做 props 传递过来  如果这么写 上面的触发 action 的时候就不要 this.prop.dispatch(xxxAction) 了 , 可以直接写 this.props.LoginAction
/**
 * 解释一下 bindActionCreactors 作用解决了如何在子组件中获取到dispatch 当然也可以通过 props 传
 * 接受一个 function 或者 object 返回 function /object 
 * @param {*} bindAction:  {login_doing: ƒ, login_done: ƒ, login_err: ƒ, login_out: ƒ, requireLogin: ƒ}
 * {
        addTodo : text => dispatch(addTodo('text'));
        removeTodo : id => dispatch(removeTodo('id'));
   }
    相当于 dispath 一个 action
 */
function matchDispatchToProps(dispatch) {
    let bindAction = bindActionCreators(loginAction, dispatch)

    return {
        loginAction: bindAction.requireLogin
    }
}


// connect 连接组件与 store ,任何时候只要 store 发生改变, mapStateToProps 都会被调用, 函数接收两个参数 第一个参数里有两个参数 分别是mapStateToProps  matchDispatchToProps 
export default connect(mapStateToProps, matchDispatchToProps)(LoginPage)

