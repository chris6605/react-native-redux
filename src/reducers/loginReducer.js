'use-strict'

import * as types from '../constants/LoginTypes';

const initialState = {
    name: '',
    password: 0
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {

        case types.LOGIN_IN_DONE:
            return {
                status: 1,
                message: '登录成功',
                user: {
                    ...action.data
                }
            }

        case types.LOGIN_IN_ERROR:
            return {
                status: -1,
                message: '登录失败',
                user: {
                    ...action.data
                }
            }
        case types.LOGIN_IN_OUT:
            return {
                status: 0,
                message: '退出登录',
                user: null
            }

        default:
            return state;
    }
}