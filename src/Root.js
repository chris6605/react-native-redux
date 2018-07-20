
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/ConfigureStore'
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