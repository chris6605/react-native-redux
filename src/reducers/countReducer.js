'use-strict'

import * as types from '../constants/CounterTypes';

const defaultState = {
    count: 5,
    factor: 1
}

export default function count(state = defaultState, action) {
    switch (action.type) {
        case types.RESET:
            return {
                ...state,
                count: 0,
            }

        case types.INCREMENT:
            return {
                ...state,
                count: state.count + state.factor
            }

        case types.DECREMENT:
            return {
                ...state,
                count: state.count - state.factor
            }
        default:
            return state;
    }
}