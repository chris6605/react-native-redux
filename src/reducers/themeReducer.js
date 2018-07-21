import * as types from '../constants/ThemeTypes';
const defaultState = {
    color: '#1097d5'
}

export default function changeColor(state = defaultState, action) {
    switch (action.type) {
        case types.RED:
            return {
                ...state,
                color: 'red'
            }
        case types.BLUE:
            return {
                ...state,
                color: 'blue'
            }
        default:
            return state
    }
}