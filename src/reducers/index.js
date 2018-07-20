'use strict'

import { combineReducers } from 'redux';

import login from './loginReducer';

import count from './countReducer';

const rootReducer = combineReducers({
    LoginReducer: login,
    countReducer: count
})

export default rootReducer;