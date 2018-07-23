'use-strict'

import * as types from '../constants/LoginTypes';

const initialState = {
    data: {
        status: '点击登录',
        isSuccess: false,
        user: null
    }
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                data: action.data
            }

        case types.LOGIN_IN_DONE:
            return {
                ...state,
                data: action.data
            }

        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                data: action.data
            }
        case types.LOGIN_IN_OUT:
            return {
                ...state,
                data: action.data
            }

        default:
            return state;
    }
}