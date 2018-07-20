'use strict'

import { combineReducers } from 'redux';

import login from './loginReducer';

const rootReducer = combineReducers({
    LoginReducer: login
})

export default rootReducer;