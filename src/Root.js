
import React, { Component } from 'react'

import { Provider } from 'react-redux'

import store from './store'

import App from '../App';


export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}