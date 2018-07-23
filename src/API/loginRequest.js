import *as loginActions from '../actions/LoginActions';

const url = 'https://www.baidu.com'

let user = {
    name: 'Bob',
    age: 25
}

//  模拟数据
let doingData = {
    status: '点击登录',
    isSuccess: false,
    user: null
}

let doneData = {
    status: '登录成功',
    isSuccess: true,
    user: user
}

let errData = {
    status: '登录失败',
    isSuccess: false,
    user: null
}


// 异步的网络请求方法 在这里再进行 dispatch Action
export function loginRequest(action) {
    return dispatch => {
        dispatch(loginActions.login_doing(doingData));
        let result = fetch(url)
            .then(res => {
                dispatch(loginActions.login_done(doneData));
            }).catch(err => {
                dispatch(loginActions.login_err(errData));
            });
    }
}


