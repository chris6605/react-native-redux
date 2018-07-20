'use-strict'

import * as types from '../constants/LoginTypes';

const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: null
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                status: '正在登录',
                isSuccess: false,
                user: null
            }

        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status: '登录成功',
                isSuccess: true,
                user: action.user
            }

        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: '登录失败',
                isSuccess: true,
                user: null
            }

        default:
            return state;
    }
}