import *as loginActions from '../actions/LoginActions';

const url = 'https://www.baidu.com'



// 登錄完成
let doneData = {
    status: 1
}

// 登錄失敗
let errData = {
    status: -1,
}


// 异步的网络请求方法 在这里再进行 dispatch Action
export function loginRequest(info) {
    return dispatch => {
        let result = fetch(url)
            .then(res => {
                dispatch(loginActions.login_done(info));
            }).catch(err => {
                dispatch(loginActions.login_err());
            });
    }
}


