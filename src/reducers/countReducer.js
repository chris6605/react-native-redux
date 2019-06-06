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
                ...state,  // 这里需要注意的是state 是上次作用后的 state, 如果没有新的 state 去覆盖他 一定不要...state , 你会得到上次的 state
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