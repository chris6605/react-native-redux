'use strict';

import * as types from '../constants/LoginTypes';
import { loginRequest as LoginApi } from '../API/loginRequest';


export function login_done(data) {
    return {
        type: types.LOGIN_IN_DONE,
        data: data
    }
}

export function login_err(data) {
    return {
        type: types.LOGIN_IN_ERROR,
        data: data
    }
}

export function login_out(data) {
    return {
        type: types.LOGIN_IN_OUT,
        data: data
    }
}

// 异步的Action 需要返回的是一个 function 在 createStore 时由middleWare 做处理  普通的action 直接返回纯对象即可
export function requireLogin(info) {
    return LoginApi(info);
}











