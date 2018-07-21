'use strict';

import * as types from '../constants/LoginTypes';

let user = {
    name: 'Bob',
    age: 25
}

export function login() {
    return (dispatch) => {
        dispatch({ type: types.LOGIN_IN_DOING });
        // 模拟用户登录
        let result = fetch('https://www.baidu.com')
            .then(res => {
                dispatch({ type: types.LOGIN_IN_DONE, user: user });
            }).catch(err => {
                dispatch({ type: types.LOGIN_IN_ERROR });
            });
    }
}





