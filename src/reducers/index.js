'use strict'

import { combineReducers } from 'redux';

import login from './loginReducer';

import count from './countReducer';

import theme from './themeReducer';


const rootReducer = combineReducers({
    LoginReducer: login,
    countReducer: count,
    themeReducer: theme
})

export default rootReducer;