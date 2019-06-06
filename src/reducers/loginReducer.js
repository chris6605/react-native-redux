'use-strict'

import * as types from '../constants/LoginTypes';

const initialState = {
    icon: 'https://ws3.sinaimg.cn/large/005BYqpggy1g3nqgsgmj9j301s01s3yc.jpg',
    name: '',
    password: ''
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {

        case types.LOGIN_IN_DONE:
            return {
                status: 1,
                message: '登录成功',
                user: {
                    ...state,
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
                user: {
                    ...initialState,
                    ...action.data
                }
            }

        default:
            return state;
    }
}